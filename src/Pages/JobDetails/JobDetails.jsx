import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { jobTitle, deadline, description, minimumPrice, maximumPrice } = jobs;
  //   name, Deadline,price Range,description
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
        <form className="card-body bg-base-100 rounded-2xl">
          <div></div>
          {/* Price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price(Bidding amount)"
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
              type="text"
              placeholder="Deadline"
              className="input input-bordered rounded-md bg-[#31795A17]"
              required
            />
          </div>
          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered rounded-md bg-[#31795A17]"
              required
            />
          </div>
          {/* Buyer email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Buyer Email</span>
            </label>
            <input
              type="email"
              placeholder="Buyer email"
              className="input input-bordered rounded-md bg-[#31795A17]"
              required
            />
          </div>
          <div className="form-control mt-6 ">
            <button className="btn bg-[#31795A] rounded-md text-white text-base">
              Bid on the project
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default JobDetails;
