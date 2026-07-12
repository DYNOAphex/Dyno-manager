import { NavLink } from "react-router-dom";
import {
  House,
  CalendarDays,
  Plus,
  Users,
  Shield,
} from "lucide-react";

import "./BottomNav.css";

function BottomNav() {
  return (
    <nav className="bottom-nav">

      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        <House size={22} />
        <span>Accueil</span>
      </NavLink>

      <NavLink
        to="/calendrier"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        <CalendarDays size={22} />
        <span>Agenda</span>
      </NavLink>

      <NavLink
        to="/create-scrim"
        className="nav-add"
      >
        <Plus size={28} />
      </NavLink>

      <NavLink
        to="/roster"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        <Users size={22} />
        <span>Roster</span>
      </NavLink>

      <NavLink
        to="/admin"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        <Shield size={22} />
        <span>Admin</span>
      </NavLink>

    </nav>
  );
}

export default BottomNav;