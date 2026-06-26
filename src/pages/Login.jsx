import { useState } from "react";
import { GraduationCap, Mail, Lock, User } from "lucide-react";

export default function Login({ onLogin }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.role) {
      alert("Please fill all fields");
      return;
    }

    onLogin(form);
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <div className="login-logo">
          <GraduationCap size={38} />
        </div>

        <h1>LearnSphere LMS</h1>
        <p>Login to continue learning</p>

        <div className="input-group">
          <User size={18} />
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <Mail size={18} />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <Lock size={18} />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <select name="role" value={form.role} onChange={handleChange}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>

        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}