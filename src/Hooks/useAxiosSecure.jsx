import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://easy-hire-backend.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (response) => {
        // 200 Ok!
        return response;
      },
      (error) => {
        console.log("error in the interceptors: ", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          logout().then(() => {
            navigate("/signIn");
          });
        }
      }
    );
  }, [logout, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
