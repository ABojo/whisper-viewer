function PostDetail(props) {
  const { name, value } = props;
  return (
    <div className="mt-2">
      <h2 className="text-purple-200 text-sm uppercase tracking-widest font-bold">
        {name}
      </h2>
      <p className="text-white text-sm">{value}</p>
    </div>
  );
}

export default PostDetail;
