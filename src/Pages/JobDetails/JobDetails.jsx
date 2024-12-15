import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

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
      <div className="hero bg-[#EFF6F3] min-h-[50vh] mt-6">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 className="text-5xl font-bold">{jobTitle}</h1>
            <p className="py-6">Deadline: {deadline}</p>
            <p>
              Price range: ${minimumPrice}-{maximumPrice}
            </p>
            <p>{description}</p>
          </div>
        </div>
      </div>
      {/* Place bid form */}

      <div className="lg:w-1/4 mx-auto mt-10">
        <h1 className="text-center">place your bid form section</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body bg-base-100 rounded-2xl"
        >
          <div></div>
          {/* Price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              {...register("bidPrice")}
              placeholder="Price (Your Bidding amount)"
              className="input input-bordered rounded-md bg-[#31795A17]"
              required
            />
          </div>
          {/* Deadline */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input
              type="date"
              {...register("deadline")}
              placeholder="Deadline"
              className="input input-bordered rounded-md bg-[#31795A17]"
              required
            />
          </div>
          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Employer Email</span>
            </label>
            <input
              type="email"
              value={user?.email}
              readOnly
              className="input input-bordered rounded-md bg-[#31795A17]"
            />
          </div>
          {/* Buyer email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Buyer Email</span>
            </label>
            <input
              type="email"
              value={jobOwnerEmail}
              readOnly
              className="input input-bordered rounded-md bg-[#31795A17]"
            />
          </div>
          <div className="form-control mt-6 ">
            <button
              disabled={isOwner}
              className="btn bg-[#31795A] rounded-md text-white text-base"
            >
              Bid on the project
            </button>
            {isOwner ? (
              <p className="text-red-500 text-sm mt-2">
                You cannot bid on your own project.
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </>
  );
};

export default JobDetails;
