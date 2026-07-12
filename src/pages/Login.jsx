import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase";

import "../styles/theme.css";
import "../styles/auth.css";

import logo from "../assets/logo.png";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    if (!email || !password) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/dashboard");

    } catch (error) {

      switch (error.code) {

        case "auth/invalid-credential":
          alert("Adresse e-mail ou mot de passe incorrect.");
          break;

        case "auth/user-not-found":
          alert("Aucun compte trouvé.");
          break;

        case "auth/wrong-password":
          alert("Mot de passe incorrect.");
          break;

        case "auth/invalid-email":
          alert("Adresse e-mail invalide.");
          break;

        default:
          alert("Erreur : " + error.message);

      }

    }

  };

  return (

    <div className="auth-page">

      <img
        src={logo}
        alt="DYNO"
        className="auth-logo"
      />

      <h1 className="title">
        DYNO
      </h1>

      <p className="subtitle">
        Esport Manager
      </p>

      <div className="divider">
        <span>◆</span>
      </div>

      <div className="auth-card">

        <h2>Connexion</h2>

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

        <button
          className="gold-btn"
          onClick={handleLogin}
        >
          Se connecter
        </button>

        <p className="auth-link">
          Pas de compte ?
          <Link to="/register">
            {" "}S'inscrire
          </Link>
        </p>

      </div>

    </div>

  );

}

export default Login;