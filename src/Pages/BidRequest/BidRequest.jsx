import noBidReqImg from "../../assets/Bid Req/no bid request.png";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useBidRequests from "../../Hooks/useBidRequests";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import Swal from "sweetalert2";
import AnimatedComponent from "../../Components/SocialLogin/AnimatedComponent/AnimatedComponent";
import { Helmet } from "react-helmet-async";

const BidRequest = () => {
  const { bidRequests, refetch } = useBidRequests();
  const axiosSecure = useAxiosSecure();

  // ACCEPT BID REQUEST FUNCTION
  const acceptBidRequest = (id) => {
    Swal.fire({
      title: "Accept This Bid Request",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await axiosSecure.patch(`/acceptBidRequest/${id}`);
        if (response.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Accepted!",
            text: "Thank You For Accept The Request!",
            icon: "success",
          });
        }
      }
    });
  };
  // REJECT BID REQUEST FUNCTION
  const cancelBidRequest = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "It Will Reject This Bid Request",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await axiosSecure.patch(`/cancelBidRequest/${id}`);
        if (response.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Rejected!",
            text: "Request Canceled Successfully!",
            icon: "success",
          });
        }
      }
    });
    refetch();
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
      <Helmet>
        <title>Easy Hire | Bid Requests</title>
      </Helmet>
      <AnimatedComponent animation="fade-up">
        <div className="min-h-screen p-4 bg-[#F0F5F3]">
          <h2 className="text-center text-base lg:text-lg font-medium py-8 xl:text-xl md:w-1/2 mx-auto xl:w-1/4">
            Welcome to Your Bid Requests! Here you can manage all the bids
            you&apos;ve received for your job postings.
          </h2>
          <div className="max-w-screen-2xl mx-auto">
            {bidRequests.length > 0 ? (
              <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                <table className="table-auto w-full text-left">
                  {/* head */}
                  <thead className="bg-[#31795A] text-white">
                    <tr>
                      <th className="px-4 py-2">NO.</th>
                      <th className="px-4 py-2">Job Title</th>
                      <th className="px-4 py-2">Bider Email</th>
                      <th className="px-4 py-2">Deadline</th>
                      <th className="px-4 py-2">Price</th>
                      <th className="px-4 py-2">Status</th>
                      <th className="px-4 py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bidRequests.map((bidRequest, index) => {
                      const { percent, label } = getProgressDetails(
                        bidRequest.status
                      );
                      return (
                        <tr key={bidRequest._id} className="hover:bg-gray-100">
                          <td className="border px-4 py-2">{index + 1}</td>
                          <td className="border px-4 py-2">
                            {bidRequest.jobTitle}
                          </td>
                          <td className="border px-4 py-2">
                            {bidRequest.email}
                          </td>
                          <td className="border px-4 py-2">
                            {bidRequest.deadline}
                          </td>
                          <td className="border px-4 py-2">
                            {bidRequest.price}
                          </td>
                          <td className="border px-4 py-2">
                            {bidRequest.status === "pending" && (
                              <p className="flex items-center">Pending 🟡</p>
                            )}
                            {bidRequest.status === "accept" && (
                              <p className="flex items-center">
                                In Progress 🟢
                              </p>
                            )}
                            {bidRequest.status === "reject" && (
                              <p className="flex items-center">Rejected ❌</p>
                            )}
                            {bidRequest.status === "complete" && (
                              <p className="flex items-center">Completed ✅</p>
                            )}
                          </td>
                          <td className="border px-4 py-2 text-center">
                            {bidRequest.status === "pending" && (
                              <div className="flex items-center gap-2">
                                <button
                                  title="Accept"
                                  onClick={() =>
                                    acceptBidRequest(bidRequest._id)
                                  }
                                  className="btn btn-xs bg-green-500 text-white"
                                >
                                  ✔️Accept
                                </button>
                                <button
                                  title="Reject"
                                  onClick={() =>
                                    cancelBidRequest(bidRequest._id)
                                  }
                                  className="btn btn-xs bg-red-600 text-white"
                                >
                                  ❌ Reject
                                </button>
                              </div>
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
              <div className="flex flex-col items-center justify-center min-h-screen">
                <img
                  src={noBidReqImg}
                  alt="No Bid Requests"
                  className="w-1/2 md:w-1/3 lg:w-1/4 rounded"
                />
                <p className="text-center text-lg mt-4">
                  No Bid Requests available
                </p>
              </div>
            )}
          </div>
        </div>
      </AnimatedComponent>
    </>
  );
};

export default BidRequest;
