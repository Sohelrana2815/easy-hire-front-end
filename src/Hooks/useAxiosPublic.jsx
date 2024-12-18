import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://easy-hire-backend.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
