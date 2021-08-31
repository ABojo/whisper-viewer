import Post from './Post';

function PostsGrid(props) {
  const { posts, setDeleteWid } = props;

  return (
    <div className="post-grid mb-12">
      {posts &&
        posts.map((post) => {
          return (
            <Post post={post} key={post.wid} setDeleteWid={setDeleteWid} />
          );
        })}
    </div>
  );
}

export default PostsGrid;
