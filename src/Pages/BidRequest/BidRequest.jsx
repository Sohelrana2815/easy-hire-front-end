import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const BidRequest = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: bidRequests = [], refetch } = useQuery({
    queryKey: ["bidRequest", user?.email],
    queryFn: async () => {
      const response = axiosSecure.get(`/bidRequests?email=${user?.email}`);
      return (await response).data;
    },
  });
  return <div>Bid Request For Job Owner: {bidRequests.length}</div>;
};

export default BidRequest;
