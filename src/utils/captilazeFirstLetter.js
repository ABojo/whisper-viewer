const capitalizeFirstLetter = (str) => {
  return `${str.substring(0, 1).toUpperCase()}${str.slice(1)}`;
};

export default capitalizeFirstLetter;
