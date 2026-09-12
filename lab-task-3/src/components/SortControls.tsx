import { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const SortControls = () => {
  const { sortBy, setSortBy } = useContext(StudentContext);

  return (
    <div className="sort-controls">
      <span className="sort-label">Sort by:</span>
      <button
        type="button"
        className={`sort-btn ${sortBy === 'default' ? 'active' : ''}`}
        onClick={() => setSortBy('default')}
      >
        Default
      </button>
      <button
        type="button"
        className={`sort-btn ${sortBy === 'name' ? 'active' : ''}`}
        onClick={() => setSortBy('name')}
      >
        Name (A–Z)
      </button>
      <button
        type="button"
        className={`sort-btn ${sortBy === 'gpa' ? 'active' : ''}`}
        onClick={() => setSortBy('gpa')}
      >
        GPA (High to Low)
      </button>
    </div>
  );
};

export default SortControls;
