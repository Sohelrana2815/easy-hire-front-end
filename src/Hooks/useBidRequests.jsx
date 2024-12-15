import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useBidRequests = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: bidRequests = [], refetch } = useQuery({
    queryKey: ["bidRequest", user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/bidRequests?email=${user?.email}`
      );
      return response.data;
    },
  });
  return { bidRequests, refetch };
};

export default useBidRequests;
