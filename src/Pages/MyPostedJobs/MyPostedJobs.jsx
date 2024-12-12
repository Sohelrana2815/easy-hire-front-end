import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";

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
    </>
  );
};

export default MyPostedJobs;
