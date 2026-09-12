import DashboardHeader from './components/DashboardHeader';
import StudentCard from './components/StudentCard';
import StatBadge from './components/StatBadge';
import './App.css';

const studentsData = [
  {
    id: '21-44832-2',
    name: 'Ahmad Zubayer',
    avatar: '/avatar.png',
    gpa: 3.85,
    major: 'Computer Science',
    credits: 96,
    courses: [
      { courseName: 'Advanced Web Tech', color: '#2563eb' },
      { courseName: 'Compiler Design', color: '#7c3aed' },
    ],
  },
  {
    id: '21-44833-2',
    name: 'Sohag Islam',
    avatar: '/avatar.png',
    gpa: 3.92,
    major: 'Software Engineering',
    credits: 110,
    courses: [
      { courseName: 'Machine Learning', color: '#059669' },
      { courseName: 'Cloud Computing', color: '#0284c7' },
    ],
  },
  {
    id: '21-44834-2',
    name: 'SM Zisan',
    avatar: '/avatar.png',
    gpa: 3.65,
    major: 'Computer Science',
    credits: 84,
    courses: [
      { courseName: 'Computer Networks', color: '#d97706' },
      { courseName: 'Cyber Security', color: '#dc2626' },
    ],
  },
  {
    id: '21-44835-2',
    name: 'Naveed Nayon',
    avatar: '/avatar.png',
    gpa: 3.78,
    major: 'Data Science',
    credits: 90,
    courses: [
      { courseName: 'Data Mining', color: '#db2777' },
      { courseName: 'Deep Learning', color: '#4f46e5' },
    ],
  },
];

const App = () => {
  return (
    <div className="dashboard-container">
      <DashboardHeader
        title="Student Dashboard"
        tagline="Overview of registered students and courses"
      />

      <section className="dashboard-overview">
        <h2>Dashboard Summary</h2>
        <div className="stats-row">
          <StatBadge label="Total Students" value={studentsData.length} />
          <StatBadge label="Average GPA" value="3.80" />
          <StatBadge label="Active Term" value="Spring 2026" />
        </div>
      </section>

      <section className="students-section">
        <h2>Enrolled Students</h2>
        <div className="student-grid">
          {studentsData.map((student) => (
            <StudentCard
              key={student.id}
              name={student.name}
              id={student.id}
              avatar={student.avatar}
              gpa={student.gpa}
              major={student.major}
              credits={student.credits}
              courses={student.courses}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
