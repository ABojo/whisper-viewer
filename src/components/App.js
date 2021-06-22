import '../css/styles.css';
import PostsGrid from './PostsGrid';
import { useState, useEffect, Fragment } from 'react';
import Navbar from './Navbar';
import formatDate from '../utils/formatDate';
import API from '../utils/API';
import Loader from './Loader';

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
      <div className="w-11/12 max-w-screen-md mx-auto">
        <div className="rounded bg-purple-100 w-full p-5 text-center text-purple-900 my-12">
          This web app is NOT affiliated with whisper in any way
        </div>
        <Navbar getPosts={getPosts} />
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
