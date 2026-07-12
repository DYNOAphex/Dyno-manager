import BottomNav from "../components/BottomNav";

function Ajouter() {
  return (
    <div
      style={{
        background: "#0f1117",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
        paddingBottom: "90px",
      }}
    >
      <h1 style={{ color: "#D4AF37" }}>➕ Ajouter</h1>

      <button>🏆 Ajouter un match</button>

      <br /><br />

      <button>📅 Ajouter un scrim</button>

      <br /><br />

      <button>👤 Ajouter un joueur</button>

      <br /><br />

      <button>📢 Ajouter une annonce</button>

      <BottomNav />
    </div>
  );
}

export default Ajouter;