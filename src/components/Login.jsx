import { GraduationCap, User, ShieldCheck } from "lucide-react";

export default function Login({ setRole }) {
  return (
    <div className="login-page">
      <div className="login-card glass">
        <GraduationCap size={56} className="login-icon" />
        <h1>LearnSphere LMS</h1>
        <p>Select your role to continue</p>

        <button onClick={() => setRole("student")}>
          <User size={18} /> Student Login
        </button>

        <button onClick={() => setRole("teacher")}>
          <User size={18} /> Teacher Login
        </button>

        <button onClick={() => setRole("admin")}>
          <ShieldCheck size={18} /> Admin Login
        </button>
      </div>
    </div>
  );
}