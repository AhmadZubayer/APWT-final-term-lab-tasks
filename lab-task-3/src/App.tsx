import { useContext, useEffect } from 'react';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import { StudentProvider, StudentContext } from './context/StudentContext';
import DashboardHeader from './components/DashboardHeader';
import SearchBar from './components/SearchBar';
import SortControls from './components/SortControls';
import StudentCard from './components/StudentCard';
import StatBadge from './components/StatBadge';
import AddStudentForm from './components/AddStudentForm';
import './App.css';

const DashboardContent = () => {
  const { theme } = useContext(ThemeContext);
  const { students, filteredStudents, favorites } = useContext(StudentContext);

  useEffect(() => {
    document.title = `Dashboard — ${filteredStudents.length} Students`;
  }, [filteredStudents.length]);

  return (
    <div className={`dashboard-container ${theme}`}>
      <DashboardHeader
        title="Student Dashboard"
      />

      <section className="dashboard-overview">
        <h2>Dashboard </h2>
        <div className="stats-row">
          <StatBadge label="Total Enrolled" value={students.length} />
          <StatBadge label="Currently Displayed" value={filteredStudents.length} />
          <StatBadge label="Favorites" value={favorites.length} />
        </div>
      </section>

      <AddStudentForm />

      <section className="controls-section">
        <SearchBar />
        <SortControls />
      </section>

      <section className="students-section" id="students">
        <h2>Enrolled Students</h2>
        {filteredStudents.length === 0 ? (
          <p className="no-students">No students found.</p>
        ) : (
          <div className="student-grid">
            {filteredStudents.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <StudentProvider>
        <DashboardContent />
      </StudentProvider>
    </ThemeProvider>
  );
};

export default App;
