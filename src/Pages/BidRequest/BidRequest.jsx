import toast, { Toaster } from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useBidRequests from "../../Hooks/useBidRequests";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
const BidRequest = () => {
  const { bidRequests, refetch } = useBidRequests();
  const axiosSecure = useAxiosSecure();

  // ACCEPT BID REQUEST FUNCTION
  const acceptBidRequest = async (id) => {
    const response = await axiosSecure.patch(`/acceptBidRequest/${id}`);
    if (response.data.modifiedCount > 0) {
      toast.success("Bid Request Accepted!");
      refetch();
    }
  };
  // REJECT BID REQUEST FUNCTION
  const cancelBidRequest = async (id) => {
    const response = await axiosSecure.patch(`/cancelBidRequest/${id}`);

    if (response.data.modifiedCount > 0) {
      toast.success("Bid Request canceled!");
      refetch();
    }
  };

  // GET PROGRESS DETAILS AND SHOW THE INFORMATION DYNAMICALLY
  const getProgressDetails = (status) => {
    switch (status) {
      case "accept":
        return { percent: 60, label: "In Progress" };
      case "complete":
        return { percent: 100, label: "Completed" };
      default:
        return { percent: 0, label: "" };
    }
  };

  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        {bidRequests.length > 0 ? (
          <div className="overflow-x-auto">
            <h2 className="text-center">Bid Requests: {bidRequests.length}</h2>
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>NO.</th>
                  <th>Job Title</th>
                  <th>Bider Email</th>
                  <th>Deadline</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {bidRequests.map((bidRequest, index) => {
                  const { percent, label } = getProgressDetails(
                    bidRequest.status
                  );
                  return (
                    <tr key={bidRequest._id} className="hover">
                      <th>{index + 1}</th>
                      <td>{bidRequest.jobTitle}</td>
                      <td>{bidRequest.email}</td>
                      <td>{bidRequest.deadline}</td>
                      <td>{bidRequest.price}</td>
                      <td>
                        {/* SHOW STATUS ACCORDING TO STATUS TEXT (PENDING) */}
                        {bidRequest.status === "pending" && (
                          <p className="flex items-center">Pending 🟡</p>
                        )}
                        {/* ACCEPT */}
                        {bidRequest.status === "accept" && "In Progress 🟢"}
                        {/* REJECT */}
                        {bidRequest.status === "reject" && "Rejected ❌"}
                        {/* COMPLETE */}
                        {bidRequest.status === "complete" && "Completed"}
                      </td>

                      {/* Button conditional */}
                      <td>
                        {bidRequest.status === "pending" && (
                          <>
                            <div className="flex items-center gap-2">
                              <button
                                title="Accept"
                                onClick={() => acceptBidRequest(bidRequest._id)}
                                className="btn btn-xs bg-green-500 text-white"
                              >
                                ✔️Accept
                              </button>
                              <button
                                title="Reject"
                                onClick={() => cancelBidRequest(bidRequest._id)}
                                className="btn btn-xs bg-red-600 text-white"
                              >
                                ❌ Reject
                              </button>
                            </div>
                          </>
                        )}
                        {(bidRequest.status === "accept" ||
                          bidRequest.status === "complete") && (
                          <div>
                            <ProgressBar
                              percent={percent}
                              filledBackground="linear-gradient(to right, #4caf50, #8bc34a)"
                            />
                            <h3>{label}</h3>
                          </div>
                        )}

                        {bidRequest.status === "reject" && null}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No Bid Requests available</p>
        )}
      </div>
      <Toaster />
    </>
  );
};

export default BidRequest;
