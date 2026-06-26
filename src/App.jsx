import { useState } from "react";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  if (user.role === "teacher") {
    return <TeacherDashboard user={user} setRole={() => setUser(null)} />;
  }

  if (user.role === "admin") {
    return <AdminDashboard user={user} setRole={() => setUser(null)} />;
  }

  return <StudentDashboard user={user} setRole={() => setUser(null)} />;
}