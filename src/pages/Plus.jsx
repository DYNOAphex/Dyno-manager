import BottomNav from "../components/BottomNav";

function Plus() {
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
      <h1 style={{ color: "#D4AF37" }}>⚙️ Plus</h1>

      <p>🏆 Résultats</p>
      <p>⚙️ Administration</p>
      <p>🔔 Notifications</p>
      <p>👤 Profil</p>

      <BottomNav />
    </div>
  );
}

export default Plus;