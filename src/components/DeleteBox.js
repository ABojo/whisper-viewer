function DeleteBox(props) {
  const { setDeleteWid } = props;

  const closeDeleteBox = () => {
    setDeleteWid(null);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black z-10 bg-opacity-60">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-11/12 max-w-xl rounded p-5 shadow-lg">
        <h1 className="font-bold text-gray-700 text-xl mb-3">
          Are you sure you want to delete this post?
        </h1>
        <p className="text-sm text-gray-500 mb-3">
          If you choose to delete this post it will be reported with multiple
          whisper accounts causing the post to be removed from all Whisper
          feeds.
        </p>
        <div className="flex items-center justify-end">
          <button
            onClick={closeDeleteBox}
            className="mr-3 p-3 border-gray-300 text-gray-500 border rounded transition duration-200 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button className="mr-3 p-3 font-bold text-white bg-red-500 rounded transition duration-200 hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default DeleteBox;
