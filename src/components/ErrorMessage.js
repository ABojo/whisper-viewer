function ErrorMessage(props) {
  const { message } = props;

  return (
    <div className="bg-red-100 p-5 rounded max-w-lg mx-auto">
      <p className="text-red-900 text-md text-center">{message}</p>
    </div>
  );
}

export default ErrorMessage;
