import { useState } from 'react';
import API from '../utils/API';
import PostDropdown from './PostDropdown';
import Loader from './Loader';

function Post(props) {
  const { post } = props;

  const [owner, setOwner] = useState(null);
  const [dropdownShown, setDropdownShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //pulls owners details from server
  const fetchOwner = async () => {
    setIsLoading(true);
    const response = await API.getOwner(post.wid);
    setIsLoading(false);
    setOwner(response.data.owner);
  };

  const toggleDropdown = () => {
    setDropdownShown(!dropdownShown);
  };

  const showDropdown = async () => {
    if (!owner) await fetchOwner();

    toggleDropdown();
  };

  return (
    <div className="shadow relative fadeIn">
      <div className="bg-purple-500 p-5 rounded-t flex justify-between items-end">
        <div>
          <p className="text-white font-bold mb-2">
            <i className="fas fa-user mr-2"></i>
            {post.nickname}
          </p>
        </div>
        {!dropdownShown && (
          <button onClick={showDropdown}>
            <i class="text-white text-lg fas fa-arrow-down hover:text-gray-200 duration-200 transition"></i>
          </button>
        )}
      </div>

      <div className="relative">
        <img src={post.url} alt={post.text} className="rounded-b mx-auto" />
        {dropdownShown && (
          <PostDropdown
            post={post}
            owner={owner}
            toggleDropdown={toggleDropdown}
          />
        )}
      </div>
      {isLoading && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Loader classes="text-white" />
        </div>
      )}
    </div>
  );
}

export default Post;
