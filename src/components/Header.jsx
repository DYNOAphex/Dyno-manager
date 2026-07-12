import "./Header.css";
import logo from "../assets/logo.png";
import { Bell } from "lucide-react";

function Header({ pseudo }) {
  return (
    <header className="header">

      <div className="header-left">

        <img
          src={logo}
          alt="DYNO"
          className="header-logo"
        />

        <div>

          <h2 className="header-title">
            Bonjour, {pseudo}
          </h2>

          <p className="header-subtitle">
            Bon retour sur DYNO
          </p>

        </div>

      </div>

      <button className="notif-button">

        <Bell size={22} />

      </button>

    </header>
  );
}

export default Header;