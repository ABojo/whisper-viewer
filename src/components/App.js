import '../css/styles.css';
import PostsGrid from './PostsGrid';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import formatDate from '../utils/formatDate';
import API from '../utils/API';

function App() {
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
    <div className="bg-white min-h-screen">
      <div className="w-11/12 max-w-screen-md mx-auto">
        <Navbar getPosts={getPosts} />
        <p className="text-lg mb-6 text-gray-400 text-center">
          {updateTime && updateTime}
        </p>
        <PostsGrid posts={posts} />
      </div>
    </div>
  );
}

export default App;
