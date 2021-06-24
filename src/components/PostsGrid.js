import Post from './Post';

function PostsGrid(props) {
  const { posts, getNextPosts } = props;

  return (
    <div className="post-grid mb-12">
      {posts &&
        posts.map((post) => {
          return <Post post={post} key={post.wid} />;
        })}
      <button
        onClick={getNextPosts}
        className="bg-purple-100 hover:bg-purple-200 rounded flex justify-center items-center transition duration-200 font-bold text-2xl text-purple-900 p-5"
      >
        Get More Posts
      </button>
    </div>
  );
}

export default PostsGrid;
