import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";

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
    <div className="relative min-h-80 bg-[#244034]">
      <div className="flex flex-col justify-center items-center min-h-80 text-white">
        <h2>Hi, Welcome Back!</h2>
      </div>

      <div className="bg-[#EFF6F3] min-h-[62vh] flex items-center justify-center">
        {/* Login Form */}
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
