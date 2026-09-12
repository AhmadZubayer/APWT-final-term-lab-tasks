import { useState, useEffect } from 'react';
import DashboardHeader from './components/DashboardHeader';
import StudentCard from './components/StudentCard';
import StatBadge from './components/StatBadge';
import SearchBar from './components/SearchBar';
import SortControls from './components/SortControls';
import initialStudentsData from './studentList.json';
import './App.css';

interface CourseItem {
  courseName: string;
  color: string;
}

interface Student {
  id: string;
  name: string;
  avatar: string;
  gpa: number;
  major: string;
  credits: number;
  courses: CourseItem[];
}

const App = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [favoriteCount, setFavoriteCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStudents(initialStudentsData);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleToggleFavorite = (isFav: boolean) => {
    setFavoriteCount((prev) => (isFav ? prev + 1 : prev - 1));
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.major.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedStudents = [...filteredStudents].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'gpa') {
      return b.gpa - a.gpa;
    }
    return 0;
  });

  useEffect(() => {
    document.title = `Dashboard — ${displayedStudents.length} Students`;
  }, [displayedStudents.length]);

  return (
    <div className="dashboard-container">
      <DashboardHeader
        title="Student Dashboard"
        tagline="Overview of registered students and courses"
        favoriteCount={favoriteCount}
      />

      <section className="dashboard-overview">
        <h2>Dashboard Summary</h2>
        <div className="stats-row">
          <StatBadge label="Total Loaded" value={students.length} />
          <StatBadge label="Currently Displayed" value={displayedStudents.length} />
          <StatBadge label="Favorites" value={favoriteCount} />
        </div>
      </section>

      <section className="controls-section">
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <SortControls
          currentSort={sortBy}
          onSortChange={setSortBy}
        />
      </section>

      <section className="students-section">
        <h2>Enrolled Students</h2>

        {loading ? (
          <div className="loading-box">
            <div className="spinner"></div>
            <p>Loading students...</p>
          </div>
        ) : displayedStudents.length === 0 ? (
          <p className="no-students">No students match your search.</p>
        ) : (
          <div className="student-grid">
            {displayedStudents.map((student) => (
              <StudentCard
                key={student.id}
                name={student.name}
                id={student.id}
                avatar={student.avatar}
                gpa={student.gpa}
                major={student.major}
                credits={student.credits}
                courses={student.courses}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default App;
