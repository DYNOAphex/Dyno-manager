function EmptyScrimCard() {
  return (
    <div className="glass-card empty-card">

      <div className="empty-icon">
        📅
      </div>

      <h2>Aucun scrim prévu</h2>

      <p>
        Aucun match n'est programmé pour le moment.
      </p>

      <button className="gold-btn">
        + Créer un scrim
      </button>

    </div>
  );
}

export default EmptyScrimCard;