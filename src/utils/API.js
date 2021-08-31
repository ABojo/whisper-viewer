const API = (() => {
  const apiPath = 'https://whisper-latest.herokuapp.com/api';

  const getLatest = async (scrollId) => {
    const response = await fetch(
      `${apiPath}/posts${scrollId ? `?scroll_id=${scrollId}` : ''}`
    );
    const json = await response.json();

    return json;
  };

  const getOwner = async (wid) => {
    const response = await fetch(`${apiPath}/posts/${wid}`);
    const json = await response.json();

    return json;
  };

  const searchPosts = async (searchTerm, scrollId) => {
    const response = await fetch(
      `${apiPath}/posts/search/${searchTerm}${
        scrollId ? `?scroll_id=${scrollId}` : ''
      }`
    );
    const json = await response.json();

    return json;
  };

  const deletePost = async (wid) => {
    const response = await fetch(`${apiPath}/posts/${wid}/flag`);
    const json = await response.json();

    return json;
  };

  return { getLatest, getOwner, searchPosts, deletePost };
})();

export default API;
