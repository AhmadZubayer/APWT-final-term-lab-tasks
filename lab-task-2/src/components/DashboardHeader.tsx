import PropTypes from 'prop-types';
import StatBadge from './StatBadge';

interface DashboardHeaderProps {
  title: string;
  tagline: string;
  favoriteCount: number;
}

const DashboardHeader = ({ title, tagline, favoriteCount }: DashboardHeaderProps) => {
  return (
    <header className="dashboard-header">
      <div className="header-info">
        <h1 className="header-title">{title}</h1>
        <p className="header-tagline">{tagline}</p>
      </div>
      <div className="header-favorites">
        <StatBadge label="Total Favorites" value={favoriteCount} />
      </div>
      <nav className="header-nav">
        <a href="#home">Home</a>
        <a href="#students">Students</a>
        <a href="#courses">Courses</a>
        <a href="#settings">Settings</a>
      </nav>
    </header>
  );
};

DashboardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  favoriteCount: PropTypes.number.isRequired,
};

export default DashboardHeader;
