import { useState, useEffect, useContext, type FormEvent } from 'react';
import { StudentContext, type Student } from '../context/StudentContext';

interface FormErrors {
  name?: string;
  id?: string;
  major?: string;
  gpa?: string;
}

const AddStudentForm = () => {
  const { students, addStudent } = useContext(StudentContext);

  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [major, setMajor] = useState('');
  const [gpa, setGpa] = useState('');
  const [courses, setCourses] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Full Name is required';
    }

    if (!id.trim()) {
      newErrors.id = 'Student ID is required';
    } else if (!/^\d+$/.test(id.trim())) {
      newErrors.id = 'Student ID must be numeric';
    } else if (students.some((student) => student.id === id.trim())) {
      newErrors.id = 'Student ID must be unique';
    }

    if (!major.trim()) {
      newErrors.major = 'Major is required';
    }

    if (!gpa.trim()) {
      newErrors.gpa = 'GPA is required';
    } else {
      const gpaNum = parseFloat(gpa);
      if (isNaN(gpaNum) || gpaNum < 0 || gpaNum > 4.0) {
        newErrors.gpa = 'GPA must be between 0.0 and 4.0';
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const courseArray = courses
      .split(',')
      .map((c) => c.trim())
      .filter((c) => c.length > 0)
      .map((courseName) => ({
        courseName,
        color: '#2563eb',
      }));

    const newStudent: Student = {
      id: id.trim(),
      name: name.trim(),
      avatar: '/avatar.png',
      gpa: parseFloat(gpa),
      major: major.trim(),
      credits: 15,
      courses: courseArray.length > 0 ? courseArray : [{ courseName: 'Core', color: '#2563eb' }],
    };

    addStudent(newStudent);
    setShowSuccess(true);
    setName('');
    setId('');
    setMajor('');
    setGpa('');
    setCourses('');
    setErrors({});
  };

  return (
    <div className="form-card" id="register">
      <h2>Register New Student</h2>

      {showSuccess && (
        <div className="success-banner">
          Student registered successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="student-form" noValidate>
        <div className="form-group">
          <label htmlFor="studentName">Full Name</label>
          <input
            id="studentName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? 'input-error' : ''}
            placeholder="e.g. John Doe"
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="studentId">Student ID</label>
          <input
            id="studentId"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className={errors.id ? 'input-error' : ''}
            placeholder="e.g. 1005 (numeric only)"
          />
          {errors.id && <span className="error-text">{errors.id}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="studentMajor">Major</label>
          <input
            id="studentMajor"
            type="text"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            className={errors.major ? 'input-error' : ''}
            placeholder="e.g. Computer Science"
          />
          {errors.major && <span className="error-text">{errors.major}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="studentGpa">GPA</label>
          <input
            id="studentGpa"
            type="number"
            step="0.01"
            value={gpa}
            onChange={(e) => setGpa(e.target.value)}
            className={errors.gpa ? 'input-error' : ''}
            placeholder="0.0 - 4.0"
          />
          {errors.gpa && <span className="error-text">{errors.gpa}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="studentCourses">Courses (comma-separated)</label>
          <input
            id="studentCourses"
            type="text"
            value={courses}
            onChange={(e) => setCourses(e.target.value)}
            placeholder="e.g. Web Tech, Database Systems"
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudentForm;
