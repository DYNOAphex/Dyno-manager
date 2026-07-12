import BottomNav from "../components/BottomNav";

function Resultats() {
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
      <h1 style={{ color: "#D4AF37" }}>🏆 Résultats</h1>

      <div
        style={{
          background: "#1b1b1b",
          borderRadius: "20px",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <h2>DYNO 2 - 0 TITANS</h2>
      </div>

      <BottomNav />
    </div>
  );
}

export default Resultats;