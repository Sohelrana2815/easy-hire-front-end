import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useJobs = () => {
  const axiosPublic = useAxiosPublic();

  const { data: jobs = [], refetch } = useQuery({
    queryKey: ["job"], // Query key should match your endpoint
    queryFn: async () => {
      const response = await axiosPublic.get("/jobs");
      return response.data;
    },
  });

  return { jobs, refetch };
};

export default useJobs;
