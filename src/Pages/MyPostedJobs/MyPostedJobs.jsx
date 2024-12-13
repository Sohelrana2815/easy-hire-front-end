import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const MyPostedJobs = () => {
  const axiosPublic = useAxiosPublic();
  const { data: myPostedJobs = [], refetch } = useQuery({
    queryKey: ["myPostedJob"],
    queryFn: async () => {
      const response = await axiosPublic.get("/myPostedJobs");
      return response.data;
    },
  });

  // react hook form

  return (
    <>
      <div className="min-h-screen p-4 " style={{ backgroundColor: "#F0F5F3" }}>
        <h2 className="text-center font-medium text-xl md:text-2xl lg:text-4xl font-EbGaramond text-[#31795A] py-6">
          Your Posted Jobs
        </h2>
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myPostedJobs.map((myPostedJob) => (
            <div
              key={myPostedJob._id}
              className="card bg-white md:w-96 m-4 rounded-md border md:h-64"
            >
              <div className="card-body">
                <h2 className="card-title">{myPostedJob.jobTitle}</h2>
                <p>{myPostedJob.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Accept</button>
                  <button className="btn btn-ghost">Deny</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyPostedJobs;
