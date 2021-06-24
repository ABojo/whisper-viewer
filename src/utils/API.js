const API = (() => {
  const getLatest = async (scrollId) => {
    const response = await fetch(
      `https://whisper-latest.herokuapp.com/api/posts${
        scrollId ? `?scroll_id=${scrollId}` : ''
      }`
    );
    const json = await response.json();

    return json;
  };

  const getOwner = async (wid) => {
    const response = await fetch(
      `https://whisper-latest.herokuapp.com/api/posts/${wid}`
    );
    const json = await response.json();

    return json;
  };

  return { getLatest, getOwner };
})();

export default API;
