import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  HelpCircle,
  Trophy,
  Medal,
  Users,
  UserCog,
  Megaphone,
  BarChart3,
  Settings,
  UploadCloud,
} from "lucide-react";

export default function Sidebar({ role }) {
  const menus = {
    student: [
      ["Dashboard", LayoutDashboard],
      ["Subjects", BookOpen],
      ["Assignments", ClipboardList],
      ["Quizzes", HelpCircle],
      ["Leaderboard", Trophy],
      ["Badges", Medal],
    ],
    teacher: [
      ["Dashboard", LayoutDashboard],
      ["Subjects", BookOpen],
      ["Materials", UploadCloud],
      ["Assignments", ClipboardList],
      ["Quizzes", HelpCircle],
      ["Submissions", Users],
    ],
    admin: [
      ["Dashboard", LayoutDashboard],
      ["Students", Users],
      ["Teachers", UserCog],
      ["Subjects", BookOpen],
      ["Announcements", Megaphone],
      ["Reports", BarChart3],
      ["Settings", Settings],
    ],
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">LS</div>

      {menus[role].map(([name, Icon], index) => (
        <div className={`sidebar-item ${index === 0 ? "active" : ""}`} key={name}>
          <Icon size={18} />
          <span>{name}</span>
        </div>
      ))}
    </aside>
  );
}