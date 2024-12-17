import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const AddJobs = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { register, handleSubmit, reset } = useForm();
  // onsubmit function
  const onSubmit = async (data) => {
    const job = {
      email: user?.email,
      jobTitle: data.jobTitle,
      deadline: data.deadline,
      description: data.description,
      minimumPrice: data.minimumPrice,
      maximumPrice: data.maximumPrice,
      category: data.category,
    };

    try {
      const jobResponse = await axiosPublic.post("/usersPostedJobs", job);
      toast.success("Job added successfully!");
      console.log(jobResponse.data);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      navigate("/myPostedJobs"); // Redirect to My Posted Jobs page
      reset(); // Clear form fields
    } catch (error) {
      toast.error("Failed to add job. Please try again.");
      console.error(error);
    }
  };

  return (
    <>
      {/* Banner section */}
      <div className="border h-[30vh] bg-[#244034]">
        <div className="flex flex-col items-center justify-center min-h-[30vh] p-4 text-center">
          <h2 className="text-white text-lg md:text-xl lg:text-2xl xl:text-4xl font-EbGaramond font-bold mb-2">
            Post Your Job
          </h2>
          <p className="text-white text-sm md:text-base lg:text-lg xl:text-xl">
            Find the best talents to get your job done effectively and
            efficiently.
          </p>
        </div>
      </div>

      {/* Job post form */}
      <div className="min-h-screen bg-[#EFF6F3] flex items-center justify-center py-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-3xl bg-white p-6 rounded-2xl shadow-lg"
        >
          <div className="mb-6">
            <h2 className="text-center text-2xl xl:text-4xl font-bold font-EbGaramond">
              Post Jobs
            </h2>
          </div>

          {/* Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Employer Email - Read-Only */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Employer Email</span>
              </label>
              <input
                type="text"
                value={user?.email}
                className="input input-bordered rounded-md bg-[#31795A17] w-full"
                readOnly
              />
            </div>

            {/* Job Title */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Job Title</span>
              </label>
              <input
                type="text"
                {...register("jobTitle")}
                placeholder="Job title"
                className="input input-bordered rounded-md bg-[#31795A17] w-full"
                required
              />
            </div>

            {/* Deadline */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <input
                type="date"
                {...register("deadline")}
                className="input input-bordered rounded-md bg-[#31795A17] w-full"
                required
              />
            </div>

            {/* Category */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                {...register("category")}
                className="select select-bordered bg-[#31795A17] w-full"
                required
              >
                <option value="web-development">Web Development</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="graphics-design">Graphics Design</option>
              </select>
            </div>

            {/* Minimum Price */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Minimum Price</span>
              </label>
              <input
                type="number"
                {...register("minimumPrice")}
                placeholder="Minimum Price"
                className="input input-bordered rounded-md bg-[#31795A17] w-full"
                required
              />
            </div>

            {/* Maximum Price */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Maximum Price</span>
              </label>
              <input
                type="number"
                {...register("maximumPrice")}
                placeholder="Maximum Price"
                className="input input-bordered rounded-md bg-[#31795A17] w-full"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              {...register("description")}
              placeholder="Short Description"
              className="textarea textarea-bordered rounded-md bg-[#31795A17] h-28 w-full"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn bg-[#31795A] text-white rounded-md uppercase text-base w-full"
            >
              Add Job
            </button>
          </div>
        </form>
      </div>

      <Toaster />
    </>
  );
};

export default AddJobs;
