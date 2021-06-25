import formatDate from '../utils/formatDate';

function SearchStatus(props) {
  const { searchTerm } = props;

  return (
    <p className="text-lg mb-6 text-gray-400 text-center">
      {`Last updated ${
        searchTerm ? `"${searchTerm}" posts` : 'latest posts'
      } at ${formatDate(new Date())}`}
    </p>
  );
}
export default SearchStatus;
