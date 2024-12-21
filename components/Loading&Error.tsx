export const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
      Loading...
    </div>
  );
};

export const Error = ({ message }: { message: string }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Something went wrong!</h2>
      <p>{message}</p>
    </div>
  );
};
