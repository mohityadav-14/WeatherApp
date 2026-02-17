const ErrorMessage = ({ message }) => {
 {message && (
  <div className="mt-4 bg-red-500/80 text-white p-3 rounded-lg text-center">
    {message}
  </div>
)}

};

export default ErrorMessage;
