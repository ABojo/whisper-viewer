import { useEffect, useState } from 'react';
import API from '../utils/API';
import Post from './Post';
import { Fragment } from 'react';
import formatDate from '../utils/formatDate';

function PostsGrid() {
  const [posts, setPosts] = useState('');
  const [updateTime, setUpdateTime] = useState('');

  const getPosts = async () => {
    const json = await API.getLatest();
    setPosts(json.data.latestPosts);
    setUpdateTime(`Last updated at ${formatDate(new Date())}`);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Fragment>
      <p className="text-lg mb-6 text-gray-400 text-center">
        {updateTime && updateTime}
      </p>
      <div className="post-grid">
        {posts &&
          posts.map((post) => {
            return <Post post={post} />;
          })}
      </div>
    </Fragment>
  );
}

export default PostsGrid;
