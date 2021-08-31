import API from '../utils/API';
import { useState, Fragment } from 'react';
import Loader from '../components/Loader';

function DeleteBox(props) {
  const { setDeleteWid, wid } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(null);

  const closeDeleteBox = () => {
    setDeleteWid(null);
    setDeleteStatus(null);
  };

  const deletePost = async () => {
    setIsLoading(true);
    const json = await API.deletePost(wid);
    setIsLoading(false);
    setDeleteStatus(json.status);
  };

  const loadingMarkUp = (
    <Fragment>
      <Loader classes="text-purple-500" />
      <h1 className="text-center text-2xl text-gray-700">Deleting post...</h1>
    </Fragment>
  );

  const confirmationMarkUp = (
    <Fragment>
      <h1 className="font-bold text-gray-700 text-xl mb-3">
        Are you sure you want to delete this post?
      </h1>
      <p className="text-sm text-gray-500 mb-3">
        If you choose to delete this post it will be reported with multiple
        whisper accounts causing the post to be removed from all Whisper feeds.
      </p>
      <div className="flex">
        <button
          onClick={closeDeleteBox}
          className="mr-3 p-3 border-gray-300 text-gray-500 border rounded transition duration-200 hover:bg-gray-100 w-full"
        >
          Cancel
        </button>
        <button
          onClick={deletePost}
          className="mr-3 p-3 font-bold text-white bg-red-500 rounded transition duration-200 hover:bg-red-600 w-full"
        >
          Delete
        </button>
      </div>
    </Fragment>
  );

  const responseMarkup = (
    <Fragment>
      <h1
        className={`${
          deleteStatus === 'error' ? 'text-red-500' : 'text-green-500'
        } text-xl mb-3`}
      >
        {deleteStatus === 'error' ? (
          <i class="fas fa-exclamation-triangle mr-3"></i>
        ) : (
          <i class="fas fa-check-square mr-3"></i>
        )}
        {deleteStatus === 'error'
          ? 'Sorry, there was a problem deleting the post!'
          : 'The post was successfully deleted!'}
      </h1>
      <button
        onClick={closeDeleteBox}
        className="p-3 border-gray-300 text-gray-500 border rounded transition duration-200 hover:bg-gray-100 w-full"
      >
        Close
      </button>
    </Fragment>
  );

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black z-10 bg-opacity-60">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-11/12 max-w-xl rounded p-5 shadow-lg">
        {isLoading
          ? loadingMarkUp
          : deleteStatus
          ? responseMarkup
          : confirmationMarkUp}
      </div>
    </div>
  );
}

export default DeleteBox;
