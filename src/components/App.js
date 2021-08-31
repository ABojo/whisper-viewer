import '../css/styles.css';
import { useState, useEffect, Fragment } from 'react';
import PostsGrid from './PostsGrid';
import Navbar from './Navbar';
import SearchBox from './SearchBox';
import Loader from './Loader';
import GetMorePosts from './GetMorePosts';
import SearchStatus from './SearchStatus';
import ErrorMessage from './ErrorMessage';
import DeleteBox from './DeleteBox';
import API from '../utils/API';

function App() {
  //holds the string currently in the serach input field
  const [searchField, setSearchField] = useState('');

  //holds the string that was in the input box the last time the search button was pressed
  const [activeSearch, setActiveSearch] = useState('');

  //holds the wid the client is requesting be deleted
  const [deleteWid, setDeleteWid] = useState(null);

  //holds the current scroll id so when the user requests more posts its able to get the next page
  const [scrollId, setScrollId] = useState('');

  //holds all posts fetched from the whisper API
  const [posts, setPosts] = useState('');

  //will be set to true when a request is pending
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = async () => {
    if (activeSearch) return await API.searchPosts(activeSearch);

    return await API.getLatest();
  };

  const fetchNextPosts = async () => {
    if (activeSearch) return await API.searchPosts(activeSearch, scrollId);

    return await API.getLatest(scrollId);
  };

  const getLatestPosts = async () => {
    setIsLoading(true);
    const json = await fetchPosts();
    setPosts(json.data.latestPosts);
    setScrollId(json.data.scrollId);
    setIsLoading(false);
  };

  const getNextPosts = async () => {
    const json = await fetchNextPosts();
    setPosts([...posts, ...json.data.latestPosts]);
    setScrollId(json.data.scrollId);
  };

  useEffect(() => {
    getLatestPosts();
  }, [activeSearch]);

  return (
    <div className="bg-white min-h-screen">
      <div className="w-11/12 max-w-screen-lg mx-auto">
        {deleteWid && <DeleteBox wid={deleteWid} setDeleteWid={setDeleteWid} />}
        <Navbar getPosts={getLatestPosts} isLoading={isLoading} />
        <SearchBox
          isLoading={isLoading}
          searchField={searchField}
          setSearchField={setSearchField}
          onSearch={() => setActiveSearch(searchField)}
        />
        {isLoading ? (
          <Loader classes="text-purple-500" />
        ) : (
          <Fragment>
            {posts.length > 0 ? (
              <Fragment>
                <SearchStatus searchTerm={activeSearch} />
                <PostsGrid posts={posts} setDeleteWid={setDeleteWid} />
                <GetMorePosts getNextPosts={getNextPosts} />
              </Fragment>
            ) : (
              <ErrorMessage message="Sorry, we couldn't find any posts with that keyword!" />
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default App;
