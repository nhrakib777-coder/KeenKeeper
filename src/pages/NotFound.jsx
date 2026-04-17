import { Link } from "react-router";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      <h1 className="text-7xl font-extrabold text-red-500 mb-4">
        404
      </h1>

      <h2 className="text-2xl font-semibold mb-2">
        Oops! Page not found
      </h2>

      <p className="text-gray-500 mb-8 max-w-md">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link to="/">
        <button className="btn bg-[#244D3F] hover:bg-[#1f2937] text-white p-4">
          Go Back Home
        </button>
      </Link>

    </div>
  );
}

export default NotFound;