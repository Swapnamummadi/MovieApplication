const Navbar = ({ searchHandler, searchQuery }) => {
  return (
    <div className="navbar-container">
      <div className="navbar">Navbar</div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter what you want to search"
          className="search"
          value={searchQuery}
          onChange={searchHandler}
        />
      </div>
    </div>
  );
};

export default Navbar;
