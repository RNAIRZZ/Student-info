import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="search-bar">
            <input 
                type="text" 
                placeholder="Search for a student..." 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
            />
        </div>
    );
};

export default SearchBar;
