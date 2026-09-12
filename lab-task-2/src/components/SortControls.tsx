import PropTypes from 'prop-types';

interface SortControlsProps {
  currentSort: string;
  onSortChange: (sortType: string) => void;
}

const SortControls = ({ currentSort, onSortChange }: SortControlsProps) => {
  return (
    <div className="sort-controls">
      <span className="sort-label">Sort by:</span>
      <button
        type="button"
        className={`sort-btn ${currentSort === 'default' ? 'active' : ''}`}
        onClick={() => onSortChange('default')}
      >
        Default
      </button>
      <button
        type="button"
        className={`sort-btn ${currentSort === 'name' ? 'active' : ''}`}
        onClick={() => onSortChange('name')}
      >
        Name (A–Z)
      </button>
      <button
        type="button"
        className={`sort-btn ${currentSort === 'gpa' ? 'active' : ''}`}
        onClick={() => onSortChange('gpa')}
      >
        GPA (High to Low)
      </button>
    </div>
  );
};

SortControls.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired,
};

export default SortControls;
