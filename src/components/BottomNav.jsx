import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaCalendarAlt,
  FaPlusCircle,
  FaUsers,
  FaCog,
} from "react-icons/fa";

import "./BottomNav.css";

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" className="nav-item">
        <FaHome />
        <span>Accueil</span>
      </NavLink>

      <NavLink to="/calendrier" className="nav-item">
        <FaCalendarAlt />
        <span>Agenda</span>
      </NavLink>

      <NavLink to="/ajouter" className="nav-item add-button">
        <FaPlusCircle />
      </NavLink>

      <NavLink to="/roster" className="nav-item">
        <FaUsers />
        <span>Équipe</span>
      </NavLink>

      <NavLink to="/plus" className="nav-item">
        <FaCog />
        <span>Plus</span>
      </NavLink>
    </nav>
  );
}

export default BottomNav;