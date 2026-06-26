import {
  Bell,
  BookOpen,
  ClipboardList,
  UploadCloud,
  Star,
  Megaphone,
  MessageCircle,
  LogOut,
  GraduationCap,
  ArrowRight,
  X,
} from "lucide-react";

import BooksImg from "../assets/images/teacher-books.png";
import "./teacher.css";

export default function TeacherDashboard({ user, setRole }) {
  return (
    <div className="teacher-page">
      <nav className="teacher-navbar">
        <div className="teacher-brand">
          <GraduationCap size={34} />
          <span>LearnSphere</span>
        </div>

        <div className="teacher-nav-right">
          <button className="teacher-bell">
            <Bell size={20} />
            <i>3</i>
          </button>

          <span className="teacher-label">TEACHER</span>
          <div className="teacher-avatar">LS</div>

          <button className="teacher-logout" onClick={setRole}>
            <LogOut size={17} />
            Logout
          </button>
        </div>
      </nav>

      <main className="teacher-main">
        <section className="teacher-hero">
          <div>
            <p>Good morning, Teacher! 👋</p>
            <h1>
              Welcome <span>back!</span>
            </h1>
            <h4>
              Manage your classes, assignments, quizzes, <br />
              and support your students effectively.
            </h4>
          </div>

          <img src={BooksImg} alt="Books" />
        </section>

        <section className="teacher-grid">
          <TeacherCard
            icon={<BookOpen />}
            title="Manage Subjects & Content"
            text="Create and manage your subjects. Add chapters, topics and learning materials."
            statLabel="Total Subjects"
            statValue="6"
            color="purple"
          />

          <TeacherCard
            icon={<ClipboardList />}
            title="Create Assignments & Quizzes"
            text="Create assignments and quizzes for your students."
            statLabel="Assignments"
            statValue="12"
            statLabel2="Quizzes"
            statValue2="8"
            color="green"
          />

          <TeacherCard
            icon={<UploadCloud />}
            title="Monitor Student Submissions"
            text="View all student submissions for assignments and quizzes."
            statLabel="Pending Review"
            statValue="18"
            color="blue"
          />

          <TeacherCard
            icon={<Star />}
            title="Check & Grade Assignments"
            text="Check student work and provide grades with feedback."
            statLabel="To Grade"
            statValue="14"
            color="orange"
          />

          <TeacherCard
            icon={<Megaphone />}
            title="Publish Marks & Feedback"
            text="Publish marks and feedback to students and help them improve."
            statLabel="Ready to Publish"
            statValue="7"
            color="purple"
          />

          <TeacherCard
            icon={<MessageCircle />}
            title="Student Feedback"
            text="See what students want to say. View their feedback and suggestions."
            statLabel="New Feedback"
            statValue="6"
            color="pink"
          />
        </section>

        <div className="teacher-tip">
          <div className="tip-bulb">💡</div>
          <div>
            <h3>Pro Tip</h3>
            <p>
              Engage with students, review submissions regularly, and provide
              constructive feedback to help them grow!
            </p>
          </div>
          <X size={20} />
        </div>
      </main>
    </div>
  );
}

function TeacherCard({
  icon,
  title,
  text,
  statLabel,
  statValue,
  statLabel2,
  statValue2,
  color,
}) {
  return (
    <div className="teacher-card">
      <div className={`teacher-icon ${color}`}>{icon}</div>

      <div className="teacher-card-content">
        <div className="teacher-card-top">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>

          <button className={`arrow-btn ${color}`}>
            <ArrowRight size={22} />
          </button>
        </div>

        <div className={`teacher-stat-bar ${color}`}>
          <span>{statLabel}</span>
          <b>{statValue}</b>

          {statLabel2 && (
            <>
              <em></em>
              <span>{statLabel2}</span>
              <b>{statValue2}</b>
            </>
          )}
        </div>
      </div>
    </div>
  );
}