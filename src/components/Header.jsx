import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="header">

      <img
        src={logo}
        alt="DYNO"
        className="logo"
      />

      <h1 className="title">
        DYNO
      </h1>

      <p className="subtitle">
        Esport Manager
      </p>

    </div>
  );
}

export default Header;