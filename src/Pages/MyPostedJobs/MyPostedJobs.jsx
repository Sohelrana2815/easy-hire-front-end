import { useQuery } from "@tanstack/react-query";
import { FaPen, FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
const MyPostedJobs = () => {
  const { user } = useAuth();
  // Axios public and axios secure
  const axiosSecure = useAxiosSecure();
  // React Query to load data
  const { data: myPostedJobs = [], refetch } = useQuery({
    queryKey: ["myPostedJob", user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/myPostedJobs?email=${user?.email}`
      );
      return response.data;
    },
  });

  const [selectedJob, setSelectedJob] = useState(null);

  // React hook form

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const id = selectedJob._id;
    const myPostedJob = {
      jobTitle: data.jobTitle,
      email: data.email,
      deadline: data.deadline,
      description: data.description,
      minimumPrice: data.minimumPrice,
      maximumPrice: data.maximumPrice,
      category: data.category,
    };

    try {
      // Update My posted jobs
      const response = await axiosSecure.patch(
        `/myPostedJobs/${id}`,
        myPostedJob
      );
      if (response.data.modifiedCount > 0) {
        Swal.fire({
          title: "Updated!",
          text: "Your job has been updated!.",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
        refetch();
        closeModal();
        reset();
      }
    } catch (error) {
      toast.error("Failed to update job. Please try again!");
      console.error(error);
    }
  };

  // Delete job function
  const deleteMyJob = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await axiosSecure.delete(`/myPostedJobs/${id}`, {});

        if (response.data.deletedCount > 0) {
          toast.success("Job deleted successfully!");
          refetch();
        }
      }
    });
  };

  //Open Modal  

  const openModal = (job) => {
    setSelectedJob(job);
    document.getElementById("my_modal_5").showModal();
  };
  // Close Modal
  const closeModal = () => {
    setSelectedJob(null);
    document.getElementById("my_modal_5").close();
  };

  return (
    <>
      <div className="min-h-screen p-4 bg-[#F0F5F3]">
        <h2 className="text-center font-medium text-xl md:text-2xl lg:text-4xl font-EbGaramond text-[#31795A] py-6">
          Manage Your Posted Jobs
        </h2>

        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myPostedJobs.map((myPostedJob) => (
            <div
              key={myPostedJob._id}
              className="card bg-white rounded-md border shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <div className="card-body p-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {myPostedJob.jobTitle}
                </h2>
                <p className="text-gray-700 mt-2 flex items-center gap-x-2">
                  <span className="text-sm">
                    <span className="text-sm md:text-base lg:text-lg font-bold font-EbGaramond">
                      Description:{"  "}
                    </span>
                    {myPostedJob.description}
                  </span>
                </p>
                <p className="text-gray-600 mt-1 flex items-center gap-x-2">
                  <MdEmail className="text-gray-600 text-lg" />
                  <span>Email: {myPostedJob.email}</span>
                </p>
                <p className="uppercase flex items-center gap-x-2">
                  <BiCategory className="text-gray-600 text-lg" />
                  <span>Category: {myPostedJob.category}</span>
                </p>
                <p className="text-gray-600 mt-1 flex items-center gap-x-2">
                  <BsCurrencyDollar className="text-gray-600 text-lg" />
                  <span>
                    Price Range: ${myPostedJob.minimumPrice} - $
                    {myPostedJob.maximumPrice}
                  </span>
                </p>
                <div className="card-actions justify-end mt-4 space-x-2">
                  <button
                    onClick={() => openModal(myPostedJob)}
                    className="btn bg-green-600 text-white hover:bg-green-700 hover:text-white"
                  >
                    <FaPen />
                  </button>
                  <button
                    onClick={() => deleteMyJob(myPostedJob._id)}
                    className="btn bg-red-600 text-white hover:bg-red-700"
                  >
                    <FaTrashCan />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg lg:text-xl text-center font-EbGaramond py-4">
            Update Your Job
          </h3>
          {selectedJob && (
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Main container div */}
                <div className="grid md:grid-cols-2 gap-x-3">
                  {/* Email */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Employer Email</span>
                    </label>
                    <input
                      type="text"
                      value={selectedJob?.email}
                      readOnly
                      className="input input-bordered bg-[#31795A17]"
                    />
                  </div>
                  {/* Job Title */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Job Title</span>
                    </label>
                    <input
                      type="text"
                      {...register("jobTitle")}
                      defaultValue={selectedJob.jobTitle}
                      className="input input-bordered bg-[#31795A17]"
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
                      defaultValue={selectedJob.deadline}
                      className="input input-bordered bg-[#31795A17]"
                    />
                  </div>

                  {/* MinimumPrice*/}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Minimum Price</span>
                    </label>
                    <input
                      type="number"
                      {...register("minimumPrice")}
                      defaultValue={selectedJob.minimumPrice}
                      className="input input-bordered bg-[#31795A17]"
                    />
                  </div>
                  {/* MaximumPrice*/}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Maximum Price</span>
                    </label>
                    <input
                      type="number"
                      {...register("maximumPrice")}
                      defaultValue={selectedJob.maximumPrice}
                      className="input input-bordered bg-[#31795A17]"
                    />
                  </div>
                  {/* Category */}
                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">Category</span>
                    </label>
                    <select
                      {...register("category")}
                      defaultValue={selectedJob.category}
                      className="select select-bordered bg-[#31795A17]"
                      required
                    >
                      <option value="web-development">Web Development</option>
                      <option value="digital-marketing">
                        Digital Marketing
                      </option>
                      <option value="graphics-design">Graphics Design</option>
                    </select>
                  </div>
                </div>
                {/* Description*/}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea
                    type="text"
                    {...register("description")}
                    defaultValue={selectedJob.description}
                    className="textarea textarea-bordered bg-[#31795A17]"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn mt-5 bg-[#31795A] rounded-full text-white uppercase font-medium w-full  text-base"
                  >
                    Update Job
                  </button>
                </div>
              </form>
            </div>
          )}
          <div className="modal-action">
            <button
              className="btn hover:bg-red-600 hover:text-white"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
      <Toaster />
    </>
  );
};

export default MyPostedJobs;
