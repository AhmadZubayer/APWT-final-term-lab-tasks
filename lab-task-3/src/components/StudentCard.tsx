import { useContext } from 'react';
import { StudentContext, type Student } from '../context/StudentContext';
import CourseTag from './CourseTag';
import StatBadge from './StatBadge';

interface StudentCardProps {
  student: Student;
}

const StudentCard = ({ student }: StudentCardProps) => {
  const { favorites, toggleFavorite, removeStudent } = useContext(StudentContext);
  const isFavorite = favorites.includes(student.id);

  return (
    <div className={`student-card ${isFavorite ? 'favorite-card' : ''}`}>
      <div className="card-top-actions">
        <button
          type="button"
          className="remove-btn"
          onClick={() => removeStudent(student.id)}
        >
          ✕ Remove
        </button>
        <button
          type="button"
          className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
          onClick={() => toggleFavorite(student.id)}
        >
          {isFavorite ? '★ Favorited' : '☆ Favorite'}
        </button>
      </div>

      <img src={student.avatar} alt={student.name} className="student-avatar" />
      <h3 className="student-name">{student.name}</h3>
      <p className="student-id">ID: {student.id}</p>
      <p className="student-major">{student.major}</p>

      <div className="student-stats">
        <StatBadge label="GPA" value={student.gpa} />
        <StatBadge label="Credits" value={student.credits} />
      </div>

      <div className="student-courses">
        {student.courses.map((course, index) => (
          <CourseTag
            key={index}
            courseName={course.courseName}
            color={course.color}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentCard;
