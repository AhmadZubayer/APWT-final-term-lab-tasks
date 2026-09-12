import { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useContext(StudentContext);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by name or major..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
