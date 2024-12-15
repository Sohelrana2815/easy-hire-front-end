import useMyBidJobs from "../../Hooks/useMyBidJobs";

const MyBids = () => {
  const { myBidJobs } = useMyBidJobs();

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
                <th>Email</th>
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
                  <td>{myBidJob.status}</td>
                  <td>
                    <button
                      disabled
                      className="btn btn-sm bg-[#31795A] text-white"
                    >
                      Complete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyBids;
