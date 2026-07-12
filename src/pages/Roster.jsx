import BottomNav from "../components/BottomNav";

function Roster() {
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
      <h1 style={{ color: "#D4AF37" }}>👥 Roster</h1>

      <ul>
        <li>Player 1</li>
        <li>Player 2</li>
        <li>Player 3</li>
      </ul>

      <BottomNav />
    </div>
  );
}

export default Roster;