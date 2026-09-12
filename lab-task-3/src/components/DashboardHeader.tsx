import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { StudentContext } from '../context/StudentContext';
import StatBadge from './StatBadge';

interface DashboardHeaderProps {
  title: string;
  tagline: string;
}

const DashboardHeader = ({ title, tagline }: DashboardHeaderProps) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { favorites } = useContext(StudentContext);

  return (
    <header className="dashboard-header">
      <div className="header-info">
        <h1 className="header-title">{title}</h1>
        <p className="header-tagline">{tagline}</p>
      </div>
      <div className="header-actions">
        <StatBadge label="Total Favorites" value={favorites.length} />
        <button type="button" className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>
      <nav className="header-nav">
        <a href="#home">Home</a>
        <a href="#students">Students</a>
        <a href="#register">Register</a>
      </nav>
    </header>
  );
};

export default DashboardHeader;
