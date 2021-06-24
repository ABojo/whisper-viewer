import '../css/styles.css';
import { useState, useEffect, Fragment } from 'react';
import PostsGrid from './PostsGrid';
import Navbar from './Navbar';
import Loader from './Loader';
import formatDate from '../utils/formatDate';
import API from '../utils/API';

function App() {
  const [scrollId, setScrollId] = useState('');
  const [posts, setPosts] = useState('');
  const [updateTime, setUpdateTime] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getLatestPosts = async () => {
    setIsLoading(true);
    const json = await API.getLatest();
    setPosts(json.data.latestPosts);
    setScrollId(json.data.scrollId);
    setUpdateTime(`Last updated at ${formatDate(new Date())}`);
    setIsLoading(false);
  };

  const getNextPosts = async () => {
    setIsLoading(true);
    const json = await API.getLatest(scrollId);
    setPosts([...posts, ...json.data.latestPosts]);
    setScrollId(json.data.scrollId);
    setIsLoading(false);
  };

  useEffect(() => {
    getLatestPosts();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="w-11/12 max-w-screen-lg mx-auto">
        <Navbar getPosts={getLatestPosts} isLoading={isLoading} />
        {isLoading && !posts ? (
          <Loader classes="text-purple-500" />
        ) : (
          <Fragment>
            <p className="text-lg mb-6 text-gray-400 text-center">
              {updateTime && updateTime}
            </p>
            <PostsGrid getNextPosts={getNextPosts} posts={posts} />
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default App;
