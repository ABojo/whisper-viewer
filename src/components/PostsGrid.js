import Post from './Post';

function PostsGrid(props) {
  const { posts } = props;

  return (
    <div className="post-grid">
      {posts &&
        posts.map((post) => {
          return <Post post={post} key={post.wid} />;
        })}
    </div>
  );
}

export default PostsGrid;
