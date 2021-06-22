function Post(props) {
  const { post } = props;

  return (
    <div className="py-5 px-5 bg-purple-500 shadow rounded">
      <h1 className="text-white font-bold text-center mb-2 text-md">
        <i class="fas fa-user mr-3"></i>
        {post.nickname}
      </h1>
      <img src={post.url} alt={post.text} className="rounded mx-auto mb-2" />
    </div>
  );
}

export default Post;
