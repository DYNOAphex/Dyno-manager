import BottomNav from "../components/BottomNav";

function Matchs() {
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
      <h1 style={{ color: "#D4AF37" }}>🎮 Matchs</h1>

      <p>Aucun match pour le moment.</p>

      <BottomNav />
    </div>
  );
}

export default Matchs;