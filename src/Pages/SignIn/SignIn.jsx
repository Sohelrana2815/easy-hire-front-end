import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const SignIn = () => {
  const [err, setErr] = useState("");
  const { loginUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location in the login page", location);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile();
        reset();
        // Navigate after login
        navigate(location?.state ? location.state : "/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Welcome Back!",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((error) => {
        setErr("Email or Password invalid please try again");
        console.error(error);
      });
  };
  return (
    <div className="min-h-[30vh] bg-[#244034]">
      <div className="flex flex-col justify-center items-center min-h-[30vh] p-4  text-white text-center">
        <h2 className="font-EbGaramond text-2xl md:text-3xl lg:text-4xl font-bold">
          Welcome Back!
        </h2>
        <p className="text-base md:text-lg lg:text-xl mt-2">
          {" "}
          Please log in to access your account.{" "}
        </p>
      </div>

      <div className="bg-[#EFF6F3] min-h-screen flex items-center justify-center p-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md bg-base-100 p-6 rounded-2xl shadow-lg"
        >
          <div className="mb-4">
            <h2 className="text-center text-lg md:text-xl">
              Still don&apos;t have an account?{" "}
              <Link to="/signUp" className="underline text-green-700">
                Sign up
              </Link>
            </h2>
          </div>
          {/* Email */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="example@gmail.com"
              className="input input-bordered rounded-md bg-[#31795A17]"
              required
            />
          </div>
          {/* Password */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password")}
              placeholder="Enter password"
              className="input input-bordered rounded-md bg-[#31795A17]"
              required
            />
            {err && <p className="text-red-500">{err}</p>}
          </div>
          <div className="form-control my-6">
            <button className="btn bg-[#31795A] rounded-md text-white text-base w-full">
              Login
            </button>
          </div>
          <SocialLogin />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
