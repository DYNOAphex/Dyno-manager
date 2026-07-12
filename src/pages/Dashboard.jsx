import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

import "../styles/dashboard.css";

import logo from "../assets/logo.png";
import BottomNav from "../components/BottomNav";

function Dashboard() {

  const navigate = useNavigate();

  const [pseudo, setPseudo] = useState("");

  useEffect(() => {

    const loadUser = async () => {

      const user = auth.currentUser;

      if (!user) return;

      const snap = await getDoc(
        doc(db, "users", user.uid)
      );

      if (snap.exists()) {
        setPseudo(snap.data().pseudo);
      }

    };

    loadUser();

  }, []);

  return (

    <div className="dashboard">

      <header className="dashboard-header">

        <img
          src={logo}
          alt="DYNO"
          className="dashboard-logo"
        />

        <h1>Bonjour {pseudo || "Joueur"} 👋</h1>

        <p>Bienvenue sur DYNO Manager</p>

      </header>

      <section className="scrim-card">

        <div className="scrim-top">

          <span className="emoji">📅</span>

          <h2>Aucun scrim prévu</h2>

        </div>

        <p>
          Organisez votre prochain entraînement.
        </p>

        <button
          className="gold-btn"
          onClick={() => navigate("/create-scrim")}
        >
          + Créer un scrim
        </button>

      </section>

      <section className="stats-grid">

        <div className="stat-card">
          <span className="stat-emoji">👥</span>
          <h3>0</h3>
          <p>Joueurs</p>
        </div>

        <div className="stat-card">
          <span className="stat-emoji">✅</span>
          <h3>0</h3>
          <p>Présents</p>
        </div>

        <div className="stat-card">
          <span className="stat-emoji">🏆</span>
          <h3>0</h3>
          <p>Matchs</p>
        </div>

        <div className="stat-card">
          <span className="stat-emoji">📈</span>
          <h3>0%</h3>
          <p>Winrate</p>
        </div>

      </section>

      <section className="info-card">

        <h2>🟢 Joueurs connectés</h2>

        <p>Aucun joueur connecté.</p>

      </section>

      <section className="info-card">

        <h2>📢 Dernières annonces</h2>

        <p>Aucune annonce.</p>

      </section>

      <BottomNav />

    </div>

  );
}

export default Dashboard;