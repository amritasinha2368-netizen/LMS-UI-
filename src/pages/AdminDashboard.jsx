import {
  Bell,
  LogOut,
  GraduationCap,
  ArrowRight,
  X,
  BarChart3,
  Users,
  UserRoundCog,
  ShieldCheck,
  Trophy,
  Megaphone,
} from "lucide-react";

import "./admin.css";

export default function AdminDashboard({ setRole }) {
  return (
    <div className="admin-page">
      <nav className="admin-navbar">
        <div className="admin-brand">
          <GraduationCap size={34} />
          <span>LearnSphere</span>
        </div>

        <div className="admin-nav-right">
          <button className="admin-bell">
            <Bell size={20} />
            <i>5</i>
          </button>

          <span className="admin-label">ADMIN</span>
          <div className="admin-avatar">LS</div>

          <button className="admin-logout" onClick={setRole}>
            <LogOut size={17} />
            Logout
          </button>
        </div>
      </nav>

      <main className="admin-main">
        <section className="admin-hero">
          <div className="admin-hero-text">
            <p>Good morning, Admin! 👋</p>
            <h1>
              Welcome <span>back!</span>
            </h1>
            <h4>
              Oversee the platform, manage users, curriculum, and ensure smooth
              governance of LearnSphere.
            </h4>
          </div>
        </section>

        <section className="admin-grid">
          <AdminCard
            icon={<BarChart3 />}
            title="System-wide Dashboard"
            text="View overall system analytics, key metrics and platform performance."
            color="purple"
            stat1="Total Users"
            value1="2468"
            stat2="Active Today"
            value2="324"
          />

          <AdminCard
            icon={<Users />}
            title="Manage Users & Curriculum"
            text="Manage all users, roles, permissions and curriculum content."
            color="green"
            stat1="Users"
            value1="1246"
            stat2="Curriculum Items"
            value2="86"
          />

          <AdminCard
            icon={<UserRoundCog />}
            title="Assign Teachers/Students"
            text="Assign teachers to classes and students to courses efficiently."
            color="blue"
            stat1="Assignments"
            value1="58"
            stat2="Classes"
            value2="32"
          />

          <AdminCard
            icon={<ShieldCheck />}
            title="Governance"
            text="Define policies, manage roles and ensure platform governance."
            color="orange"
            stat1="Policies"
            value1="15"
            stat2="Roles"
            value2="8"
          />

          <AdminCard
            icon={<Trophy />}
            title="Control Badges & Leaderboards"
            text="Create and manage badges, leaderboards and reward criteria."
            color="purple"
            stat1="Badges"
            value1="24"
            stat2="Leaderboards"
            value2="7"
          />

          <AdminCard
            icon={<Megaphone />}
            title="System Announcements"
            text="Send important announcements to all users across the platform."
            color="pink"
            stat1="Announcements"
            value1="12"
            stat2="Unread"
            value2="5"
          />
        </section>

        <div className="admin-tip">
          <div className="admin-tip-icon">💡</div>

          <div>
            <h3> Pro Tip</h3>
            <p>
              Regularly monitor performance, manage users, and keep the platform
              secure and engaging.
            </p>
          </div>

          <X size={20} />
        </div>
      </main>
    </div>
  );
}

function AdminCard({ icon, title, text, color, stat1, value1, stat2, value2 }) {
  return (
    <div className="admin-card">
      <div className={`admin-icon ${color}`}>{icon}</div>

      <div className="admin-card-body">
        <div className="admin-card-top">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>

          <button className={`admin-arrow ${color}`}>
            <ArrowRight size={22} />
          </button>
        </div>

        <div className={`admin-stat-bar ${color}`}>
          <span>{stat1}</span>
          <b>{value1}</b>
          <em></em>
          <span>{stat2}</span>
          <b>{value2}</b>
        </div>
      </div>
    </div>
  );
}