import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMyBidJobs = (sortOrder) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: myBidJobs = [], refetch } = useQuery({
    queryKey: ["myBidJob", user?.email, sortOrder],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/myBidJobs?email=${user?.email}&sort=${sortOrder}`
      );
      return response.data;
    },
  });
  return { myBidJobs, refetch };
};

export default useMyBidJobs;
