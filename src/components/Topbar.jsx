import { LogOut } from "lucide-react";

export default function Topbar({ role, setRole }) {
  return (
    <header className="topbar">
      <h2>LearnSphere</h2>

      <div className="topbar-right">
        <span>{role.toUpperCase()}</span>
        <button className="outline-btn" onClick={() => setRole(null)}>
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </header>
  );
}