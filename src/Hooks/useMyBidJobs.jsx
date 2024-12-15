import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMyBidJobs = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: myBidJobs = [], refetch } = useQuery({
    queryKey: ["myBidJob", user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/myBidJobs?email=${user?.email}`);
      return response.data;
    },
  });
  return { myBidJobs, refetch };
};

export default useMyBidJobs;
