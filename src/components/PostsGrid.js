import Post from './Post';

function PostsGrid(props) {
  const { posts } = props;

  return (
    <div className="post-grid">
      {posts &&
        posts.map((post) => {
          return <Post post={post} key={post.wid} />;
        })}
      <div className="border-2 border-purple-500 rounded">Get More Posts</div>
    </div>
  );
}

export default PostsGrid;
