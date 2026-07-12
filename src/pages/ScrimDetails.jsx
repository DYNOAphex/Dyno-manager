import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { auth, db } from "../firebase";

import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

function ScrimDetails() {

  const { id } = useParams();

  const [scrim, setScrim] = useState(null);

  useEffect(() => {

    loadScrim();

  }, []);

  const loadScrim = async () => {

    const snap = await getDoc(doc(db, "scrims", id));

    if (snap.exists()) {

      setScrim({
        id: snap.id,
        ...snap.data(),
      });

    }

  };

  const repondre = async (etat) => {

    const user = auth.currentUser;

    if (!user) return;

    await updateDoc(doc(db, "scrims", id), {

      [`participants.${user.uid}`]: etat,

    });

    loadScrim();

  };

  if (!scrim) return <h2>Chargement...</h2>;

  const participants = scrim.participants || {};

  const presents = Object.values(participants).filter(
    p => p === "present"
  ).length;

  const absents = Object.values(participants).filter(
    p => p === "absent"
  ).length;

  const attente = Object.values(participants).filter(
    p => p === "attente"
  ).length;

  return (

    <div className="dashboard">

      <h1>{scrim.type}</h1>

      <p>📅 {scrim.date}</p>

      <p>🕒 {scrim.heure1}</p>

      <p>⚔️ {scrim.adversaire}</p>

      <hr />

      <h3>🟢 Présents : {presents}</h3>

      <h3>🟡 En attente : {attente}</h3>

      <h3>🔴 Absents : {absents}</h3>

      <button
        className="gold-btn"
        onClick={() => repondre("present")}
      >
        ✅ Je participe
      </button>

      <button
        className="gold-btn"
        onClick={() => repondre("attente")}
      >
        🟡 Peut-être
      </button>

      <button
        className="gold-btn"
        onClick={() => repondre("absent")}
      >
        ❌ Je suis absent
      </button>

    </div>

  );

}

export default ScrimDetails;