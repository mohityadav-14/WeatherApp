const ErrorMessage = ({ message }) => {
  return (
    message && (
      <div className="mt-4 bg-red-500/80 text-white p-3 rounded-lg text-center border border-red-700">
        <p className="font-semibold">⚠️ Error</p>
        <p className="text-sm mt-1">{message}</p>
      </div>
    )
  );
};

export default ErrorMessage;
