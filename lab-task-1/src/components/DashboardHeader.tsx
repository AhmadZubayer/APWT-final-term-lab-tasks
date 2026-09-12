import PropTypes from 'prop-types';

interface DashboardHeaderProps {
  title: string;
  tagline: string;
}

const DashboardHeader = ({ title, tagline }: DashboardHeaderProps) => {
  return (
    <header className="dashboard-header">
      <div className="header-info">
        <h1 className="header-title">{title}</h1>
        <p className="header-tagline">{tagline}</p>
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
};

export default DashboardHeader;
