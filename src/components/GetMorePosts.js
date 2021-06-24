function GetMorePosts(props) {
  return (
    <button
      onClick={props.getNextPosts}
      className="bg-purple-100 w-full hover:bg-purple-200 rounded flex justify-center items-center transition duration-200 font-bold text-2xl text-purple-900 p-5 mb-12"
    >
      Get More Posts
    </button>
  );
}

export default GetMorePosts;
