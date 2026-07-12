import BottomNav from "../components/BottomNav";

function Calendrier() {
  return (
    <div
      style={{
        background: "#0f1117",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
        paddingTop: "35px",
        paddingBottom: "100px",
      }}
    >
      <h1
        style={{
          color: "#D4AF37",
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "30px",
        }}
      >
        📅 Calendrier
      </h1>

      <div
        style={{
          background: "#1b1b1b",
          border: "2px solid #D4AF37",
          borderRadius: "25px",
          padding: "28px",
          maxWidth: "500px",
          margin: "0 auto",
          textAlign: "center",
          boxShadow: "0 0 15px rgba(212,175,55,0.15)",
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
          TITANS
        </h2>

        <p style={{ fontSize: "24px" }}>📅 17 Juillet</p>

        <p style={{ fontSize: "24px" }}>🕘 20h30</p>

        <p
          style={{
            color: "#4CAF50",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          ✅ Confirmé
        </p>
      </div>

      <BottomNav />
    </div>
  );
}

export default Calendrier;