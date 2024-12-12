import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { createNewUser, updateUserProfile } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  // onsubmit function
  const onSubmit = (data) => {
    const { name, photoURL, email, password } = data;
    // Register
    createNewUser(email, password).then((result) => {
      console.log(result.user);
      // Update profile
      updateUserProfile(name, photoURL).then(() => {
        reset();
        // Navigate after login
        navigate(location?.state ? location.state : "/");
        console.log("Update successfully");
        if ((name, photoURL)) {
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Sign up successfully",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
    });
  };
  return (
    <div className="relative min-h-80 bg-[#244034]">
      <div className="flex flex-col justify-center items-center min-h-80 text-white">
        <h2>Register</h2>
        <p>Create an account & Start posting or hiring talents</p>
      </div>

      <div className="bg-[#EFF6F3] min-h-[62vh] flex items-center justify-center">
        {/* Login Fo rm */}
        <div className="w-1/2 mt-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body bg-base-100  rounded-2xl p-10"
          >
            <div>
              <h2 className="text-center xl:text-4xl font-bold">
                Create Account
              </h2>
              <h2 className="text-center">
                Have an account?{" "}
                <Link to="/signIn" className="underline text-green-700">
                  Sign In
                </Link>
              </h2>
            </div>
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name")}
                placeholder="John"
                className="input input-bordered rounded-md bg-[#31795A17]"
                required
              />
            </div>
            {/* Email */}
            <div className="form-control">
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password")}
                placeholder="Enter Password"
                className="input input-bordered rounded-md bg-[#31795A17]"
                required
              />
            </div>
            {/* Photo URL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photoURL")}
                placeholder="Enter Photo URL"
                className="input input-bordered rounded-md bg-[#31795A17]"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-[#31795A] text-white rounded-md uppercase text-base"
              >
                Sign up
              </button>
            </div>
            <SocialLogin />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
