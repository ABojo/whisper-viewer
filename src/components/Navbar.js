function Navbar(props) {
  const { getPosts, isLoading } = props;

  const disabledButton = 'bg-gray-200 cursor-default';
  const activeButton = 'bg-purple-500 hover:bg-purple-700';
  return (
    <div className="flex justify-between items-baseline py-12">
      <h1 className="text-purple-500 text-2xl">Whisper Viewer</h1>
      <button
        disabled={isLoading}
        onClick={getPosts}
        className={` rounded p-2 transition duration-200 ${
          isLoading ? disabledButton : activeButton
        }`}
      >
        <i className="fas fa-sync-alt text-white text-xl"></i>
      </button>
    </div>
  );
}

export default Navbar;
