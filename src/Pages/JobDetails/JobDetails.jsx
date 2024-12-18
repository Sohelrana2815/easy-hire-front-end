import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaCopy, FaFacebook, FaTwitter } from "react-icons/fa6";
import { BsClock, BsCurrencyDollar } from "react-icons/bs";
import { MdCategory } from "react-icons/md";
import { Helmet } from "react-helmet";
const JobDetails = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const allUsersJobs = useLoaderData();
  const navigate = useNavigate();
  const {
    jobTitle,
    deadline,
    description,
    minimumPrice,
    maximumPrice,
    category,
    email: jobOwnerEmail,
  } = allUsersJobs;

  const isOwner = user?.email === jobOwnerEmail;

  //

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const myBidedJob = {
      jobTitle: jobTitle,
      email: user?.email,
      deadline: data.deadline,
      status: "pending",
      jobOwnerEmail: jobOwnerEmail,
      bidPrice: parseFloat(data.bidPrice),
    };

    try {
      const bidResponse = await axiosSecure.post(`/bidedJobs`, myBidedJob);
      if (bidResponse.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Bid This Job Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/myBidJobs");
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Easy Hire | Job Details </title>
      </Helmet>
      {/* Banner section */}
      <div className="border h-[20vh] bg-[#244034]">
        <div className="flex flex-col items-center justify-center min-h-[20vh] p-4 text-center">
          <h2 className="text-white text-lg md:text-xl lg:text-2xl xl:text-4xl font-EbGaramond font-bold mb-2">
            {jobTitle}
          </h2>
          <div className="flex text-white gap-x-2 md:gap-x-6 lg:gap-x-8 xl:gap-x-10 py-6">
            {/* btn 1 */}
            <p className="border px-4 py-1 rounded-md bg-slate-50 bg-opacity-10 hover:bg-[#00BF58] cursor-pointer hover:border-none flex items-center gap-x-2 transition duration-300">
              <FaFacebook /> Share on Facebook
            </p>
            {/* btn 2 */}
            <p className="border px-4 py-1 rounded-md bg-slate-50 bg-opacity-10 hover:bg-[#00BF58] cursor-pointer hover:border-none flex items-center gap-x-2 transition duration-300">
              <FaTwitter /> Share on Twitter
            </p>
            {/* btn 3 */}
            <p className="border px-4 py-1 rounded-md bg-slate-50 bg-opacity-10 hover:bg-[#00BF58] cursor-pointer hover:border-none flex items-center gap-x-2 transition duration-300">
              <FaCopy /> Copy Link
            </p>
          </div>
        </div>
      </div>

      {/* Details*/}
      <div className="min-h-screen bg-[#EFF6F3] relative px-4">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row gap-x-4 md:gap-x-6 lg:gap-x-7 justify-center">
          {/* price */}
          <div className="border w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex flex-col items-center justify-center bg-slate-50 rounded-3xl h-52 my-10 lg:my-12 xl:my-16 p-4 transition-transform transform hover:scale-105 shadow-lg">
            {" "}
            <div className="py-3 md:py-4 xl:py-6">
              {" "}
              <BsCurrencyDollar className="text-green-700 text-lg md:text-xl lg:text-2xl xl:text-3xl" />{" "}
            </div>{" "}
            <p className="text-center text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
              Price Range
            </p>{" "}
            <p className="font-medium text-center">
              {" "}
              ${minimumPrice} - ${maximumPrice}{" "}
            </p>{" "}
          </div>
          {/* Deadline */}
          <div className="border w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex flex-col items-center justify-center bg-slate-50 rounded-3xl h-52 my-10 lg:my-12 xl:my-16 p-4 transition-transform transform hover:scale-105 shadow-lg">
            {" "}
            <div className="py-3 md:py-4 xl:py-6">
              {" "}
              <BsClock className="text-green-700 text-lg md:text-xl lg:text-2xl xl:text-3xl" />{" "}
            </div>{" "}
            <p className="text-center text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
              Deadline
            </p>{" "}
            <p className="font-medium text-center"> {deadline}</p>{" "}
          </div>
          {/* Category */}
          <div className="border w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex flex-col items-center justify-center bg-slate-50 rounded-3xl h-52 my-10 lg:my-12 xl:my-16 p-4 transition-transform transform hover:scale-105 shadow-lg">
            {" "}
            <div className="py-3 md:py-4 xl:py-6">
              {" "}
              <MdCategory className="text-green-700 text-lg md:text-xl lg:text-2xl xl:text-3xl" />{" "}
            </div>{" "}
            <p className="text-center text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
              Category
            </p>{" "}
            <p className="font-medium text-center"> {category}</p>{" "}
          </div>
        </div>

        {/* Description */}
        <div className="max-w-screen-sm mx-auto px-10 space-y-2">
          <h2 className="text-lg md:text-xl lg:text-2xl font-medium font-EbGaramond">
            Job Description
          </h2>
          <p>{description}</p>
        </div>

        {/* Form */}
        <div className="flex flex-col items-center my-10 xl:my-0 xl:absolute xl:top-16 xl:right-20 xl:w-96">
          {" "}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md bg-base-100 p-6 rounded-2xl shadow-lg"
          >
            {" "}
            <h2 className="text-center text-2xl font-semibold mb-4">
              Place Your Bid Now
            </h2>{" "}
            {/* Price */}{" "}
            <div className="form-control mb-4">
              {" "}
              <label className="label">
                {" "}
                <span className="label-text">Price</span>{" "}
              </label>{" "}
              <input
                type="number"
                {...register("bidPrice")}
                placeholder="Price (Your Bidding amount)"
                className="input input-bordered text-sm md:text-base rounded-md bg-[#31795A17]"
                required
              />{" "}
            </div>{" "}
            {/* Deadline */}{" "}
            <div className="form-control mb-4">
              {" "}
              <label className="label">
                {" "}
                <span className="label-text">Deadline</span>{" "}
              </label>{" "}
              <input
                type="date"
                {...register("deadline")}
                placeholder="Deadline"
                className="input input-bordered text-sm md:text-base rounded-md bg-[#31795A17]"
                required
              />{" "}
            </div>{" "}
            {/* Email */}{" "}
            <div className="form-control mb-4">
              {" "}
              <label className="label">
                {" "}
                <span className="label-text">Employer Email</span>{" "}
              </label>{" "}
              <input
                type="email"
                value={user?.email}
                readOnly
                className="input input-bordered text-sm md:text-base rounded-md bg-[#31795A17]"
              />{" "}
            </div>{" "}
            {/* Buyer email */}{" "}
            <div className="form-control mb-4">
              {" "}
              <label className="label">
                {" "}
                <span className="label-text">Buyer Email</span>{" "}
              </label>{" "}
              <input
                type="email"
                value={jobOwnerEmail}
                readOnly
                className="input input-bordered text-sm md:text-base rounded-md bg-[#31795A17]"
              />{" "}
            </div>{" "}
            <div className="form-control mt-6">
              {" "}
              <button
                disabled={isOwner}
                className="btn w-full bg-[#31795A] rounded-md text-white md:text-base"
              >
                {" "}
                Bid on the project{" "}
              </button>{" "}
              {isOwner ? (
                <p className="text-red-500 text-sm mt-2 text-center">
                  {" "}
                  You cannot bid on your own project.{" "}
                </p>
              ) : null}{" "}
            </div>{" "}
          </form>{" "}
        </div>
      </div>
    </>
  );
};

export default JobDetails;
