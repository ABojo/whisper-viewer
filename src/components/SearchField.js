function SearchField(props) {
  const { setSearchValue } = props;

  return (
    <div className="w-full max-w-sm mx-auto mb-12 relative border border-gray-100 rounded">
      <input
        onChange={(e) => setSearchValue(e.currentTarget.value)}
        placeholder="Enter a keyword"
        className="p-3 pr-24 bg-purple-100 rounded  block w-full "
      />
      <button className="bg-white p-3 text-purple-500 absolute rounded-r top-0 right-0 font-bold hover:bg-gray-200 transition duration-200">
        Search
      </button>
    </div>
  );
}

export default SearchField;
