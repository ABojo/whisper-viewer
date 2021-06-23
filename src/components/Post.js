function Post(props) {
  const { post } = props;

  return (
    <div className="shadow">
      <div className="bg-purple-500 p-5 rounded-t flex justify-between items-end">
        <div>
          <p className="text-white font-bold mb-2">
            <i className="fas fa-user mr-2"></i>
            {post.nickname}
          </p>
          <p className="text-white text-sm">{post.location}</p>
        </div>
        <button>
          <i class="text-white text-lg fas fa-arrow-down"></i>
        </button>
      </div>

      <img src={post.url} alt={post.text} className="rounded-b mx-auto" />
    </div>
  );
}

export default Post;
