function SearchField(props) {
  const { setSearchField, onSearch, searchField, isLoading } = props;

  const active = 'bg-white text-purple-500 hover:bg-gray-200';
  const inactive = 'bg-gray-200 text-white';

  return (
    <div className="w-full max-w-sm mx-auto mb-12">
      <h3
        className={`tracking-widest uppercase text-sm text-gray-400 mb-2 transition duration-200 ${
          !searchField && 'invisible'
        }`}
      >
        Search by keyword
      </h3>
      <div className="w-full  relative border border-gray-100 rounded">
        <input
          onKeyPress={(e) => {
            if (e.key === 'Enter') onSearch();
          }}
          onChange={(e) => setSearchField(e.currentTarget.value)}
          placeholder="Search by keyword"
          className="p-3 pr-24 bg-purple-100 rounded  block w-full "
        />
        <button
          disabled={isLoading}
          onClick={onSearch}
          className={`${
            isLoading ? inactive : active
          } bg-white p-3 absolute rounded-r top-0 right-0 font-bold transition duration-200`}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchField;
