import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase";

import "../styles/theme.css";
import "../styles/auth.css";

function CreateScrim() {

  const navigate = useNavigate();

  const [type, setType] = useState("Scrim");
  const [date, setDate] = useState("");
  const [heure1, setHeure1] = useState("");
  const [heure2, setHeure2] = useState("");
  const [adversaire, setAdversaire] = useState("");
  const [arene, setArene] = useState("Arène 1");
  const [description, setDescription] = useState("");

  const handleCreate = async () => {

    if (!date || !heure1 || !adversaire) {
      alert("Merci de remplir tous les champs obligatoires.");
      return;
    }

    try {

      await addDoc(collection(db, "scrims"), {

        type,
        date,
        heure1,
        heure2,
        adversaire,
        arene,
        description,
        createdAt: serverTimestamp(),

      });

      alert("Scrim créé avec succès.");

      navigate("/dashboard");

    } catch (error) {

      alert(error.message);

    }

  };

  return (

    <div className="auth-page">

      <div className="auth-card">

        <h2>Créer une session</h2>

        <select
          className="auth-input"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>Scrim</option>
          <option>Division</option>
        </select>

        <input
          className="auth-input"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          className="auth-input"
          type="time"
          value={heure1}
          onChange={(e) => setHeure1(e.target.value)}
        />

        <input
          className="auth-input"
          type="time"
          value={heure2}
          onChange={(e) => setHeure2(e.target.value)}
        />

        <input
          className="auth-input"
          placeholder="Adversaire"
          value={adversaire}
          onChange={(e) => setAdversaire(e.target.value)}
        />

        <select
          className="auth-input"
          value={arene}
          onChange={(e) => setArene(e.target.value)}
        >
          <option>Arène 1</option>
          <option>Arène 2</option>
        </select>

        <textarea
          className="auth-input"
          rows="4"
          placeholder="Description (facultatif)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          className="gold-btn"
          onClick={handleCreate}
        >
          Créer
        </button>

      </div>

    </div>

  );

}

export default CreateScrim;