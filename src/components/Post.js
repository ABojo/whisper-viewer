import { useState, useEffect, Fragment } from 'react';
import API from '../utils/API';
import PostDetail from './PostDetail';
import Loader from './Loader';

function Post(props) {
  const { post } = props;

  const [owner, setOwner] = useState(null);
  const [extraShown, setExtraShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchOwner = async () => {
    const response = await API.getOwner(post.wid);
    setOwner(response.data.owner);
  };

  const onClickOpen = async () => {
    if (!owner) {
      setIsLoading(true);
      await fetchOwner();
      setIsLoading(false);
    }

    setExtraShown(true);
  };

  const onClickClose = () => {
    setExtraShown(false);
  };

  return (
    <div className="shadow relative">
      <div className="bg-purple-500 p-5 rounded-t flex justify-between items-end">
        <div>
          <p className="text-white font-bold mb-2">
            <i className="fas fa-user mr-2"></i>
            {post.nickname}
          </p>
        </div>
        {!extraShown && (
          <button onClick={onClickOpen}>
            <i class="text-white text-lg fas fa-arrow-down"></i>
          </button>
        )}
      </div>

      <div className="relative">
        <img src={post.url} alt={post.text} className="rounded-b mx-auto" />
        {extraShown && (
          <div className="bg-purple-500 p-5 pt-0 absolute top-0 left-0 w-full max-w-100 flex justify-between items-end">
            <div>
              <PostDetail name="Age" value={owner && owner.age} />
              <PostDetail name="Gender" value={owner && owner.gender} />
              <PostDetail name="Location" value={post.location} />
              <PostDetail
                name="Rating"
                value={
                  owner &&
                  `${owner.rating.average} - ${owner.rating.total} Chats`
                }
              />
              <PostDetail name="Replies" value={post.replies} />
              <PostDetail name="Views" value={post.viewCount} />
            </div>
            <button onClick={onClickClose}>
              <i className="text-white text-lg fas fa-arrow-up"></i>
            </button>
          </div>
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
