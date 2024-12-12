import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AddJobs = () => {
  const axiosPublic = useAxiosPublic();

  const { register, handleSubmit, reset } = useForm();
  // onsubmit function
  const onSubmit = async (data) => {
    const job = {
      jobTitle: data.jobTitle,
      deadline: data.deadline,
      description: data.description,
      minimumPrice: data.minimumPrice,
      maximumPrice: data.maximumPrice,
      category: data.category,
    };

    const jobResponse = await axiosPublic.post("/jobs", job);
    console.log(data);

    if (jobResponse.data.insertedId) {
      reset();
      Swal.fire({
        title: "Added",
        text: "Your Job has been added successfully.",
        icon: "success",
      });
    }
  };
  return (
    <>
      <div className="relative min-h-80 bg-[#244034]">
        <div className="flex flex-col justify-center items-center min-h-80 text-white">
          <h2>Register</h2>
          <p>Create an account & Start posting or hiring talents</p>
        </div>

        <div className="bg-[#EFF6F3] min-h-[62vh] flex items-center justify-center">
          {/* Login Fo rm */}
          <div className="w-1/2 mt-10">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body bg-base-100  rounded-2xl p-10"
            >
              <div>
                <h2 className="text-center xl:text-4xl font-bold">Post Jobs</h2>
              </div>
              {/* Job title */}
              <div className="form-control">
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Deadline</span>
                </label>
                <input
                  type="text"
                  {...register("deadline")}
                  placeholder="Deadline"
                  className="input input-bordered rounded-md bg-[#31795A17]"
                  required
                />
              </div>
              {/* Description */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  {...register("description")}
                  placeholder="Short Description"
                  className="input input-bordered rounded-md bg-[#31795A17]"
                  required
                />
              </div>
              {/* Category */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  {...register("category")}
                  required
                  className="select select-bordered bg-[#31795A17]"
                >
                  <option value="web-development">Web Development</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="graphics-design">Graphics Design</option>
                </select>
              </div>

              {/* Min price */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Minium Price</span>
                </label>
                <input
                  type="number"
                  {...register("minimumPrice")}
                  placeholder="Minimum Price"
                  className="input input-bordered rounded-md bg-[#31795A17]"
                  required
                />
              </div>
              {/* Max price */}
              <div className="form-control">
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
      </div>
    </>
  );
};

export default AddJobs;
