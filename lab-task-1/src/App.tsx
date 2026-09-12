import DashboardHeader from './components/DashboardHeader';
import StudentCard from './components/StudentCard';
import StatBadge from './components/StatBadge';
import studentsData from './studentList.json';
import './App.css';

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
