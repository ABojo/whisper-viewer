import Loader from './Loader';
import { useState } from 'react';
function GetMorePosts(props) {
  const [isLoading, setIsLoading] = useState(false);
  const active = 'bg-purple-100 hover:bg-purple-200 text-purple-900';
  const disabled = 'bg-gray-200 text-white';

  const onClickGet = async () => {
    setIsLoading(true);
    await props.getNextPosts();
    setIsLoading(false);
  };

  return (
    <button
      disabled={isLoading}
      onClick={onClickGet}
      className={`${
        isLoading ? disabled : active
      } w-full rounded flex justify-center items-center transition duration-200 font-bold text-2xl p-5 mb-12`}
    >
      {isLoading ? 'Getting posts...' : 'Get More Posts'}
    </button>
  );
}

export default GetMorePosts;
