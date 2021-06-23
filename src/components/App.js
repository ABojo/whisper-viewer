import '../css/styles.css';
import { useState, useEffect, Fragment } from 'react';
import PostsGrid from './PostsGrid';
import Navbar from './Navbar';
import Loader from './Loader';
import formatDate from '../utils/formatDate';
import API from '../utils/API';

function App() {
  const [posts, setPosts] = useState('');
  const [updateTime, setUpdateTime] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getPosts = async () => {
    setIsLoading(true);
    const json = await API.getLatest();
    setPosts(json.data.latestPosts);
    setUpdateTime(`Last updated at ${formatDate(new Date())}`);
    setIsLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="w-11/12 max-w-screen-lg mx-auto">
        <Navbar getPosts={getPosts} isLoading={isLoading} />
        {isLoading ? (
          <Loader />
        ) : (
          <Fragment>
            <p className="text-lg mb-6 text-gray-400 text-center">
              {updateTime && updateTime}
            </p>
            <PostsGrid posts={posts} />
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default App;
