import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useMyBidJobs from "../../Hooks/useMyBidJobs";
import { FcCancel } from "react-icons/fc";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import Swal from "sweetalert2";
import AnimatedComponent from "../../Components/SocialLogin/AnimatedComponent/AnimatedComponent";
import { Helmet } from "react-helmet-async";

const MyBids = () => {
  // sort asc order
  const [sortOrder, setSortOrder] = useState(null);
  const { myBidJobs, refetch } = useMyBidJobs(sortOrder);
  const axiosSecure = useAxiosSecure();
  const completeProject = async (id) => {
    Swal.fire({
      title: "Submit the Project?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await axiosSecure.patch(`/completeProject/${id}`);
        if (response.data.modifiedCount > 0) {
          refetch();

          Swal.fire({
            title: "Submitted!",
            text: "Your Project has been submitted successfully!",
            icon: "success",
          });
        }
      }
    });
  };

  // sort event handler

  const handleSort = (order) => {
    console.log(order);
    setSortOrder(order);
  };
  return (
    <>
      <Helmet>
        <title>Easy Hire | My Bids</title>
      </Helmet>
      <div className="min-h-screen p-4 bg-[#F0F5F3]">
        <AnimatedComponent animation="fade-right">
          <h2 className="text-center text-base lg:text-lg font-medium py-4 xl:text-xl md:w-1/2 mx-auto xl:w-1/3">
            Keep an eye on your bids and stay engaged to maximize your chances
            of success. Your dedication can lead to more opportunities and
            successful projects.
          </h2>
        </AnimatedComponent>
        <AnimatedComponent animation="fade-up">
          <div className="max-w-screen-2xl mx-auto">
            {/* Dropdown */}
            <div className="dropdown mb-4">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 bg-[#31795A] rounded text-white hover:bg-[#265a43] w-full sm:w-auto"
              >
                Sort by Status
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg border border-gray-200"
              >
                <li>
                  <a
                    onClick={() => handleSort("asc")}
                    className="py-2 px-4 hover:bg-gray-100 cursor-pointer text-gray-700 text-xs"
                  >
                    (In Progress → Canceled)
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => handleSort("desc")}
                    className="py-2 px-4 hover:bg-gray-100 cursor-pointer text-gray-700 text-xs"
                  >
                    (Canceled → In Progress)
                  </a>
                </li>
              </ul>
            </div>

            <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
              <table className="table-auto w-full text-left">
                {/* Head */}
                <thead className="bg-[#31795A] text-white">
                  <tr>
                    <th className="px-4 py-2">No.</th>
                    <th className="px-4 py-2">Job Title</th>
                    <th className="px-4 py-2">Job Owner Email</th>
                    <th className="px-4 py-2">Deadline</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {myBidJobs.map((myBidJob, index) => (
                    <tr key={myBidJob._id} className="hover:bg-gray-100">
                      <td className="border px-4 py-2">{index + 1}</td>
                      <td className="border px-4 py-2">{myBidJob.jobTitle}</td>
                      <td className="border px-4 py-2">
                        {myBidJob.jobOwnerEmail}
                      </td>
                      <td className="border px-4 py-2">{myBidJob.deadline}</td>
                      <td className="border px-4 py-2">
                        {myBidJob.status === "pending" && (
                          <p className="flex items-center">Pending 🟡</p>
                        )}
                        {myBidJob.status === "accept" && (
                          <p className="flex items-center">In Progress 🟢</p>
                        )}
                        {myBidJob.status === "reject" && (
                          <p className="flex items-center">Canceled ❌</p>
                        )}
                        {myBidJob.status === "complete" && (
                          <p className="flex items-center">Completed ✅</p>
                        )}
                      </td>
                      <td className="border px-4 py-2 text-center">
                        {!(
                          myBidJob.status === "reject" ||
                          myBidJob.status === "complete"
                        ) && (
                          <button
                            onClick={() => completeProject(myBidJob._id)}
                            disabled={!(myBidJob.status === "accept")}
                            className="btn btn-xs bg-[#31795A] text-white"
                          >
                            Complete
                          </button>
                        )}
                        {myBidJob.status === "reject" && (
                          <p className="text-center text-3xl">
                            <FcCancel />
                          </p>
                        )}
                        {myBidJob.status === "complete" && (
                          <p className="text-center text-green-500 text-2xl">
                            <FaCheckCircle />
                          </p>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedComponent>
      </div>
    </>
  );
};

export default MyBids;
