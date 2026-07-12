import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { auth, db } from "../firebase";

import {
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

import "../styles/dashboard.css";

function ScrimDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [scrim, setScrim] = useState(null);

  useEffect(() => {

    const unsubscribe = onSnapshot(

      doc(db, "scrims", id),

      (snapshot) => {

        if (snapshot.exists()) {

          setScrim({

            id: snapshot.id,
            ...snapshot.data(),

          });

        }

      },

      (error) => {

        console.error(error);

      }

    );

    return () => unsubscribe();

  }, [id]);

  const repondre = async (etat) => {

    if (!auth.currentUser) return;

    try {

      await updateDoc(doc(db, "scrims", id), {

        [`participants.${auth.currentUser.uid}`]: etat,

      });

    } catch (e) {

      console.error(e);

      alert("Erreur lors de l'enregistrement.");

    }

  };

  if (!scrim) {

    return <h2 style={{ color: "white" }}>Chargement...</h2>;

  }

  const participants = scrim.participants || {};

  const presents = Object.values(participants).filter(
    (v) => v === "present"
  ).length;

  const absents = Object.values(participants).filter(
    (v) => v === "absent"
  ).length;

  const attente = Object.values(participants).filter(
    (v) => v === "attente"
  ).length;

  return (

    <div className="dashboard">

      <h1>{scrim.type}</h1>

      <p>📅 {scrim.date}</p>

      <p>🕒 {scrim.heure1}</p>

      {scrim.heure2 && <p>🕒 {scrim.heure2}</p>}

      <p>⚔️ {scrim.adversaire}</p>

      <p>🏟️ {scrim.arene}</p>

      <hr />

      <h2>Participants</h2>

      <p>🟢 Présents : {presents}</p>

      <p>🟡 En attente : {attente}</p>

      <p>🔴 Absents : {absents}</p>

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

      <button
        className="gold-btn"
        onClick={() => navigate("/dashboard")}
      >
        ⬅ Retour
      </button>

    </div>

  );

}

export default ScrimDetails;