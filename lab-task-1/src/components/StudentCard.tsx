import PropTypes from 'prop-types';
import CourseTag from './CourseTag';
import StatBadge from './StatBadge';

interface CourseItem {
  courseName: string;
  color: string;
}

interface StudentCardProps {
  name: string;
  id: string;
  avatar: string;
  gpa: number;
  major: string;
  credits: number;
  courses: CourseItem[];
}

const StudentCard = ({ name, id, avatar, gpa, major, credits, courses }: StudentCardProps) => {
  return (
    <div className="student-card">
      <img src={avatar} alt={name} className="student-avatar" />
      <h3 className="student-name">{name}</h3>
      <p className="student-id">ID: {id}</p>
      <p className="student-major">{major}</p>

      <div className="student-stats">
        <StatBadge label="GPA" value={gpa} />
        <StatBadge label="Credits" value={credits} />
      </div>

      <div className="student-courses">
        {courses.map((course, index) => (
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

StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  gpa: PropTypes.number.isRequired,
  major: PropTypes.string.isRequired,
  credits: PropTypes.number.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      courseName: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default StudentCard;
