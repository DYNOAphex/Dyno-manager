import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Calendrier from "./pages/Calendrier";
import Ajouter from "./pages/Ajouter";
import CreateScrim from "./pages/CreateScrim";
import ScrimDetails from "./pages/ScrimDetails";
import Roster from "./pages/Roster";
import Plus from "./pages/Plus";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Auth */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Scrims */}
        <Route path="/create-scrim" element={<CreateScrim />} />
        <Route path="/scrim/:id" element={<ScrimDetails />} />

        {/* Pages */}
        <Route path="/calendrier" element={<Calendrier />} />
        <Route path="/ajouter" element={<Ajouter />} />
        <Route path="/roster" element={<Roster />} />
        <Route path="/plus" element={<Plus />} />
        <Route path="/admin" element={<Admin />} />

        {/* Redirection */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;