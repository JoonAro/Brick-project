const Search = ({ searchClass }) => {
  return (
    <>
      <div className={`search-container ${searchClass}`}>
        <input type="text" placeholder="Search" />
      </div>
    </>
  );
};
export default Search;
