import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

import { auth, db } from "../firebase";

import "../styles/theme.css";
import "../styles/auth.css";

import logo from "../assets/logo.png";

function Register() {
  const navigate = useNavigate();

  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleRegister = async () => {
    if (!pseudo || !email || !password || !confirm) {
      alert("Remplis tous les champs.");
      return;
    }

    if (password !== confirm) {
      alert("Les mots de passe sont différents.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        pseudo: pseudo,
        email: email,
        role: "joueur",
        photoURL: "",
        online: false,
        createdAt: serverTimestamp(),
      });

      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-page">

      <img src={logo} alt="DYNO" className="auth-logo" />

      <h1 className="title">DYNO</h1>

      <p className="subtitle">
        Esport Manager
      </p>

      <div className="divider">
        <span>◆</span>
      </div>

      <div className="auth-card">

        <h2>Créer un compte</h2>

        <input
          className="auth-input"
          type="text"
          placeholder="Pseudo"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
        />

        <input
          className="auth-input"
          type="email"
          placeholder="Adresse e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="auth-input"
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          className="auth-input"
          type="password"
          placeholder="Confirmer le mot de passe"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />

        <button
          className="gold-btn"
          onClick={handleRegister}
        >
          S'inscrire
        </button>

        <p className="auth-link">
          Déjà un compte ?
          <Link to="/"> Se connecter</Link>
        </p>

      </div>

    </div>
  );
}

export default Register;