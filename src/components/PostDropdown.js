import PostDetail from './PostDetail';
import formatDate from '../utils/formatDate';
import formatAge from '../utils/formatAge';
import capitalizeFirstLetter from '../utils/captilazeFirstLetter';

function PostDropdown(props) {
  const { owner, post, toggleDropdown } = props;

  return (
    <div className="bg-purple-500 p-5 pt-0 absolute top-0 left-0 w-full max-w-100 flex justify-between items-end">
      <div>
        <PostDetail name="Age" value={formatAge(owner.age)} />
        <PostDetail name="Gender" value={capitalizeFirstLetter(owner.gender)} />
        <PostDetail name="Location" value={post.location} />
        <PostDetail
          name="Rating"
          value={`${owner.rating.average.toFixed(2)} - ${
            owner.rating.total
          } Chats`}
        />
        <PostDetail name="Replies" value={post.replies} />
        <PostDetail name="Views" value={post.viewCount} />
        <PostDetail name="Timestamp" value={formatDate(new Date(post.ts))} />
      </div>
      <button onClick={toggleDropdown}>
        <i className="text-white text-lg fas fa-arrow-up hover:text-gray-200 duration-200 transition"></i>
      </button>
    </div>
  );
}

export default PostDropdown;
