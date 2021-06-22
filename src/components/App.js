import '../css/styles.css';
import PostsGrid from './PostsGrid';
import { Fragment } from 'react';

function App() {
  return (
    <div className="w-11/12 max-w-screen-md mx-auto">
      <PostsGrid />
    </div>
  );
}

export default App;
