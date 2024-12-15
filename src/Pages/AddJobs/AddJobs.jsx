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
      <div className="relative">
        <div className="absolute h-36 bg-[#244034] flex justify-center items-center w-full">
          <h1 className="text-white text-xl md:text-2xl lg:text-4xl font-EbGaramond font-medium">
            Provide the details of the job you&apos;re hiring for
          </h1>
        </div>
      </div>
      {/* Login Fo rm */}
      <div className="flex justify-center items-center min-h-screen bg-[#EFF6F3]">
        <div className="xl:w-1/2 md:w-3/4 w-full px-4 md:px-0">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body bg-white rounded-2xl p-10"
          >
            <div>
              <h2 className="text-center xl:text-4xl font-bold font-EbGaramond">
                Post Jobs
              </h2>
            </div>

            {/* Grid layout */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2">
              {/* Employer Email - Read-Only */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Employer Email</span>
                </label>
                <input
                  type="text"
                  value={user?.email}
                  className="input input-bordered rounded-md bg-[#31795A17]"
                  readOnly
                />
              </div>

              {/* Job Title */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Job title</span>
                </label>
                <input
                  type="text"
                  {...register("jobTitle")}
                  placeholder="Job title"
                  className="input input-bordered rounded-md bg-[#31795A17]"
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
                  className="input input-bordered rounded-md bg-[#31795A17]"
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
                  className="select select-bordered bg-[#31795A17]"
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
                  className="input input-bordered rounded-md bg-[#31795A17]"
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
                  className="input input-bordered rounded-md bg-[#31795A17]"
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
                className="textarea textarea-bordered rounded-md bg-[#31795A17] h-28"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-[#31795A] text-white rounded-md uppercase text-base"
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default AddJobs;
