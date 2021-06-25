import { Fragment } from 'react';

function SearchField(props) {
  const { setSearchField, onSearch, searchField } = props;

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
          onChange={(e) => setSearchField(e.currentTarget.value)}
          placeholder="Search by keyword"
          className="p-3 pr-24 bg-purple-100 rounded  block w-full "
        />
        <button
          onClick={onSearch}
          className="bg-white p-3 text-purple-500 absolute rounded-r top-0 right-0 font-bold hover:bg-gray-200 transition duration-200"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchField;
