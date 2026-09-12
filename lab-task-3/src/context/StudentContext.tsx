import { createContext, useState, useEffect, type ReactNode } from 'react';
import initialStudentsData from '../studentList.json';

export interface CourseItem {
  courseName: string;
  color?: string;
}

export interface Student {
  id: string;
  name: string;
  avatar: string;
  gpa: number;
  major: string;
  credits: number;
  courses: CourseItem[];
}

interface StudentContextType {
  students: Student[];
  filteredStudents: Student[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  addStudent: (newStudent: Student) => void;
  removeStudent: (id: string) => void;
}

export const StudentContext = createContext<StudentContextType>({
  students: [],
  filteredStudents: [],
  searchQuery: '',
  setSearchQuery: () => {},
  sortBy: 'default',
  setSortBy: () => {},
  favorites: [],
  toggleFavorite: () => {},
  addStudent: () => {},
  removeStudent: () => {},
});

export const StudentProvider = ({ children }: { children: ReactNode }) => {
  const [students, setStudents] = useState<Student[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('students');
    if (saved) {
      setStudents(JSON.parse(saved));
    } else {
      setStudents(initialStudentsData);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('students', JSON.stringify(students));
    }
  }, [students, isLoaded]);

  const addStudent = (newStudent: Student) => {
    setStudents((prev) => [newStudent, ...prev]);
  };

  const removeStudent = (id: string) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
    setFavorites((prev) => prev.filter((favId) => favId !== id));
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const filteredStudents = students
    .filter((student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.major.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'gpa') {
        return b.gpa - a.gpa;
      }
      return 0;
    });

  return (
    <StudentContext.Provider
      value={{
        students,
        filteredStudents,
        searchQuery,
        setSearchQuery,
        sortBy,
        setSortBy,
        favorites,
        toggleFavorite,
        addStudent,
        removeStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
