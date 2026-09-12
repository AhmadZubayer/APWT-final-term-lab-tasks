interface CourseTagProps {
  courseName: string;
  color?: string;
}

const CourseTag = ({ courseName, color = '#2563eb' }: CourseTagProps) => {
  return (
    <span className="course-tag" style={{ backgroundColor: color }}>
      {courseName}
    </span>
  );
};

export default CourseTag;
