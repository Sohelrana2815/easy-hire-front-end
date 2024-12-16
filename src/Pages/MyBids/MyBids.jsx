import toast, { Toaster } from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useMyBidJobs from "../../Hooks/useMyBidJobs";
import { FcCancel } from "react-icons/fc";
import { FaCheckCircle } from "react-icons/fa";
const MyBids = () => {
  const { myBidJobs, refetch } = useMyBidJobs();
  const axiosSecure = useAxiosSecure();
  const completeProject = async (id) => {
    const response = await axiosSecure.patch(`/completeProject/${id}`);

    if (response.data.modifiedCount > 0) {
      toast.success("Successfully Submit your project!");
      refetch();
    }
  };
  return (
    <>
      <h2 className="text-center text-2xl font-bold">
        My Bid Jos: {myBidJobs.length}
      </h2>
      <div className="max-w-screen-2xl mx-auto">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Job Title</th>
                <th>Job Owner Email</th>
                <th>Deadline</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myBidJobs.map((myBidJob, index) => (
                <tr key={myBidJob._id} className="hover">
                  <th>{index + 1}</th>
                  <td>{myBidJob.jobTitle}</td>
                  <td>{myBidJob.jobOwnerEmail}</td>
                  <td>{myBidJob.deadline}</td>
                  <td>
                    {myBidJob.status === "pending" && (
                      <p className="flex items-center"> Pending 🟡 </p>
                    )}{" "}
                    {myBidJob.status === "accept" && (
                      <p className="flex items-center"> In Progress 🟢 </p>
                    )}{" "}
                    {myBidJob.status === "reject" && (
                      <p className="flex items-center"> Canceled ❌ </p>
                    )}{" "}
                    {myBidJob.status === "complete" && (
                      <p className="flex items-center"> Completed ✅ </p>
                    )}
                  </td>
                  {/* Enabled  button conditional wise */}
                  <td>
                    {!(
                      myBidJob.status === "reject" ||
                      myBidJob.status === "complete"
                    ) && (
                      <button
                        onClick={() => completeProject(myBidJob._id)}
                        disabled={!(myBidJob.status === "accept")}
                        className="btn btn-xs bg-[#31795A] text-white"
                      >
                        {" "}
                        Complete{" "}
                      </button>
                    )}{" "}
                    {myBidJob.status === "reject" && (
                      <p className="text-center text-3xl">
                        {" "}
                        <FcCancel />{" "}
                      </p>
                    )}{" "}
                    {myBidJob.status === "complete" && (
                      <p className="text-center text-green-500 text-2xl">
                        {" "}
                        <FaCheckCircle />{" "}
                      </p>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default MyBids;
