import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AnimatedComponent from "../../Components/SocialLogin/AnimatedComponent/AnimatedComponent";
import { Helmet } from "react-helmet";

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
      navigate(location?.state ? location.state : "/");
      updateUserProfile(name, photoURL).then(() => {
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
    <>
    <Helmet>
      <title>Easy Hire | Sign up</title>
    </Helmet>
      <div className="relative min-h-[30vh] bg-[#244034]">
        <div className="flex flex-col justify-center items-center min-h-[30vh] p-4 text-white text-center">
          <h2 className="text-2xl md:text-5xl font-EbGaramond font-bold">
            Register
          </h2>
          <p className="mt-4 text-sm md:text-lg lg:text-xl">
            Create an account & start posting or hiring talents
          </p>
        </div>

        <AnimatedComponent animation="fade-up">
          <div className="bg-[#EFF6F3] min-h-screen flex justify-center">
            {/* Login Fo rm */}
            <div className="bg-[#EFF6F3] min-h-screen flex items-center justify-center p-4 w-1/2">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-md bg-base-100 p-6 rounded-2xl shadow-lg"
              >
                <div className="mb-4">
                  <h2 className="text-center text-xl md:text-2xl xl:text-4xl font-medium font-EbGaramond">
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
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="John"
                    className="input input-bordered rounded-md bg-[#31795A17] w-full"
                    required
                  />
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
                    className="input input-bordered rounded-md bg-[#31795A17] w-full"
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
                    placeholder="Enter Password"
                    className="input input-bordered rounded-md bg-[#31795A17] w-full"
                    required
                  />
                </div>
                {/* Photo URL */}
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    {...register("photoURL")}
                    placeholder="Enter Photo URL"
                    className="input input-bordered rounded-md bg-[#31795A17] w-full"
                    required
                  />
                </div>
                <div className="form-control my-6">
                  <button
                    type="submit"
                    className="btn bg-[#31795A] text-white rounded-md uppercase text-base w-full"
                  >
                    Sign up
                  </button>
                </div>
                <SocialLogin />
              </form>
            </div>
          </div>
        </AnimatedComponent>
      </div>
    </>
  );
};

export default SignUp;
