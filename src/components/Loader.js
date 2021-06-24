function Loader(props) {
  const { classes } = props;
  return <div className={`loader ${classes && classes}`}></div>;
}

export default Loader;
