import '../css/styles.css';
import PostsGrid from './PostsGrid';
import { Fragment } from 'react';
import Navbar from './Navbar';
function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="w-11/12 max-w-screen-md mx-auto">
        <Navbar />
        <PostsGrid />
      </div>
    </div>
  );
}

export default App;
