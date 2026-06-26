export const initialData = {
  students: ["Aarav", "Diya", "Kabir"],
  teachers: ["Mr. Sharma", "Ms. Rao"],
  subjects: ["Math", "Science", "English"],
  assignments: [
    {
      title: "Math Assignment 1",
      subject: "Math",
      status: "Submitted",
      marks: null,
    },
  ],
  quizzes: [
    {
      title: "Science Quiz",
      subject: "Science",
      question: "Water freezes at?",
      options: ["0°C", "50°C", "100°C"],
      answer: "0°C",
    },
  ],
  badges: ["Starter"],
  xp: 120,
  leaderboard: [
    { name: "Diya", xp: 300 },
    { name: "Aarav", xp: 120 },
    { name: "Kabir", xp: 90 },
  ],
  announcements: ["Welcome to the LMS!", "Exam schedule released."],
};