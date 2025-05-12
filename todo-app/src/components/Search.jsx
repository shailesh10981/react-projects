const Search = ({ setSearchText, searchText }) => {
  return (
    <input
      type="text"
      placeholder="Type to search"
      className="form-control mb-3"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
};

export default Search;
