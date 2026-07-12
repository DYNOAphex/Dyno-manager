import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth, db } from "../firebase";

import {
  doc,
  getDoc,
  collection,
  onSnapshot,
} from "firebase/firestore";

import "../styles/dashboard.css";

import logo from "../assets/logo.png";
import BottomNav from "../components/BottomNav";

function Dashboard() {

  const navigate = useNavigate();

  const [pseudo, setPseudo] = useState("Joueur");
  const [scrim, setScrim] = useState(null);

  useEffect(() => {

    const loadUser = async () => {

      if (!auth.currentUser) return;

      try {

        const snap = await getDoc(
          doc(db, "users", auth.currentUser.uid)
        );

        if (snap.exists()) {
          setPseudo(snap.data().pseudo);
        }

      } catch (err) {
        console.log(err);
      }

    };

    loadUser();

    const unsubscribe = onSnapshot(

      collection(db, "scrims"),

      (snapshot) => {

        if (snapshot.empty) {

          setScrim(null);
          return;

        }

        const liste = snapshot.docs.map((doc) => ({

          id: doc.id,
          ...doc.data(),

        }));

        liste.sort((a, b) => a.date.localeCompare(b.date));

        setScrim(liste[0]);

      },

      (error) => {

        console.log(error);

      }

    );

    return () => unsubscribe();

  }, []);

  return (

    <div className="dashboard">

      <header className="dashboard-header">

        <img
          src={logo}
          alt="DYNO"
          className="dashboard-logo"
        />

        <h1>Bonjour {pseudo} 👋</h1>

        <p>Bienvenue sur DYNO Manager</p>

      </header>

      <section
        className="scrim-card"
        onClick={() => {

          if (scrim) {

            navigate(`/scrim/${scrim.id}`);

          }

        }}
        style={{
          cursor: scrim ? "pointer" : "default",
        }}
      >

        {scrim ? (

          <>

            <div className="scrim-top">

              <span className="emoji">🎮</span>

              <h2>{scrim.type}</h2>

            </div>

            <p>📅 {scrim.date}</p>

            <p>🕒 {scrim.heure1}</p>

            {scrim.heure2 && (

              <p>🕒 {scrim.heure2}</p>

            )}

            <p>⚔️ {scrim.adversaire}</p>

            <p>🏟️ {scrim.arene}</p>

            {scrim.description && (

              <p>{scrim.description}</p>

            )}

          </>

        ) : (

          <>

            <div className="scrim-top">

              <span className="emoji">📅</span>

              <h2>Aucune session prévue</h2>

            </div>

            <p>Créez votre première session.</p>

          </>

        )}

        <button
          className="gold-btn"
          onClick={(e) => {

            e.stopPropagation();

            navigate("/create-scrim");

          }}
        >

          + Créer une session

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

          <span className="stat-emoji">🎮</span>

          <h3>{scrim ? 1 : 0}</h3>

          <p>Sessions</p>

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