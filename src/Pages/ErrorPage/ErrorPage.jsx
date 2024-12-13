import { FaArrowRightLong } from "react-icons/fa6";
import errorPageImg from "../../assets/404 page/404.svg";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100">
      <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        <img
          src={errorPageImg}
          alt="404 Error"
          className="w-80 md:w-[40rem] object-contain"
        />
        <div className="space-y-6">
          <h1 className="text-7xl md:text-9xl font-bold">404</h1>
          <h2 className="text-3xl md:text-5xl font-semibold">Page Not Found</h2>
          <p className="text-gray-600 max-w-xl text-lg md:text-xl">
            Can&apos;t find what you need? Try searching below or return to our
            homepage.
          </p>
          <Link to="/">
            <button className="flex items-center gap-3 px-8 py-3 mt-6 text-white bg-green-500 rounded-full text-lg md:text-xl hover:bg-green-600">
              Go Back <FaArrowRightLong />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
