import {
  Bell,
  BookOpen,
  ClipboardList,
  HelpCircle,
  Star,
  Trophy,
  Upload,
  ClipboardCheck,
  Award,
  CalendarDays,
  ShieldCheck,
  Grid2X2,
  ChevronRight,
  GraduationCap,
  LogOut,
  X,
} from "lucide-react";

import MathImg from "../assets/images/math.png";
import ScienceImg from "../assets/images/science.png";
import EnglishImg from "../assets/images/english.png";
import QuizImg from "../assets/images/quiz.png";
import TrophyImg from "../assets/images/trophy.png";

import "./student.css";
export default function StudentDashboard({ user, setRole }) {
  return (
    <div className="student-page">
      <nav className="student-navbar">
        <div className="brand">
          <GraduationCap size={34} />
          <span>LearnSphere</span>
        </div>

        <div className="nav-right">
          <button className="bell-btn">
            <Bell size={20} />
            <i></i>
          </button>

          <span className="student-label">STUDENT</span>
          <div className="avatar">LS</div>

        <button className="logout-btn" onClick={setRole}>
  <LogOut size={17} />
  Logout
</button>
        </div>
      </nav>

      <main className="student-main">
        <section className="hero-row">
          <div className="hero-text">
            <p>Good evening, Student! 👋</p>
            <h1>Keep learning, keep growing!</h1>
            <span>Track your progress, complete tasks and achieve more.</span>
          </div>

          <div className="stats-row">
            <TopStat icon={<Grid2X2 />} title="Total XP" value="260 XP" note="Keep it up!" />
            <TopStat icon={<ShieldCheck />} title="Quizzes Taken" value="7" note="Great work!" color="green" />
            <TopStat icon={<CalendarDays />} title="Assignments" value="3" note="Stay consistent!" color="orange" />
            <TopStat icon={<Award />} title="Badges" value="4" note="Nice collection!" color="blue" />
          </div>
        </section>
        <section className="top-grid">
          <Card title="Subjects" icon={<BookOpen />} link="View all">
            <div className="subjects">
              <Subject img={MathImg} title="Math" topics="12 Topics" />
              <Subject img={ScienceImg} title="Science" topics="18 Topics" />
              <Subject img={EnglishImg} title="English" topics="15 Topics" />
            </div>

            <p className="card-footer">
              Explore your subjects and continue learning
              <ChevronRight size={16} />
            </p>
          </Card>

          <Card title="Assignments" icon={<ClipboardList />} link="View all">
            <div className="assignment-box">
              <div>
                <h3>Math Assignment 1</h3>
                <p>
                  Math <b>• Submitted</b>
                </p>
              </div>
              <div className="check">✓</div>
            </div>

            <button className="primary-btn">
              <Upload size={18} />
              Upload Assignment
            </button>
          </Card>

          <Card title="Quizzes" icon={<HelpCircle />} link="View all">
            <div className="quiz-box">
              <div>
                <h3>Science Quiz</h3>
                <p>Test your knowledge!</p>

                <button className="quiz-btn">
                  Attempt Quiz
                  <ChevronRight size={17} />
                </button>
              </div>

              <img src={QuizImg} className="quiz-img" alt="Quiz" />
            </div>
          </Card>
        </section>  
        <section className="bottom-grid">   

    

          <Card title="XP Progress" icon={<Star />} className="xp-card">
            <div className="xp-content">
              <div>
                <h2>260 XP</h2>
                <p>Keep it up! You're on a roll.</p>

                <div className="progress">
                  <div></div>
                </div>

                <span className="xp-small">260 / 500 XP</span>

                <div className="badges">
                  <span>☆ Starter</span>
                  <span className="green">🎓 Quiz Master</span>
                </div>
              </div>

              <img src={TrophyImg} className="trophy-img" alt="Trophy" />
            </div>
          </Card>

          <Card title="Leaderboard" icon={<Trophy />} link="View full">
            <div className="leaderboard">
              <Rank medal="🥇" name="Diya" xp="300 XP" />
              <Rank medal="🥈" name="Aarav" xp="220 XP" />
              <Rank medal="🥉" name="Kabir" xp="90 XP" />
            </div>
          </Card>

         <div className="streak-card">
  <h3>
    <ClipboardCheck size={22} />
    Submission Streak
  </h3>

  <div className="circle">
    8
    <span>Submitted</span>
  </div>

  <p>
    Excellent! Every assignment has been submitted on time.
  </p>

  <div className="days">
    {["A1","A2","A3","A4","A5","A6","A7","A8"].map((item,index)=>(
      <span key={index} className="done">
        ✓
      </span>
    ))}
  </div>
</div>
        </section>

        <div className="tip-card">
          <div className="tip-icon">💡</div>

          <div>
            <h3>Pro Tip</h3>
            <p>
              Complete assignments and take quizzes regularly to earn more XP and climb
              the leaderboard.When you get 500 XP, you will unlock the Quiz Master!
            </p>
          </div>

          <X size={20} />
        </div>
      </main>
    </div>
  );
}

function TopStat({ icon, title, value, note, color = "" }) {
  return (
    <div className={`top-stat ${color}`}>
      <div className="top-icon">{icon}</div>
      <div>
        <p>{title}</p>
        <h2>{value}</h2>
        <span>{note}</span>
      </div>
    </div>
  );
}

function Card({ title, icon, link, children, className = "" }) {
  return (
    <div className={`dash-card ${className}`}>
      <div className="card-head">
        <div>
          {icon}
          <h2>{title}</h2>
        </div>

        {link && <a>{link}</a>}
      </div>

      {children}
    </div>
  );
}

function Subject({ img, title, topics }) {
  return (
    <div className="subject-box">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{topics}</p>
    </div>
  );
}

function Rank({ medal, name, xp }) {
  return (
    <div className="rank">
      <span>{medal}</span>
      <b>{name}</b>
      <strong>{xp}</strong>
    </div>
  );
}
 
