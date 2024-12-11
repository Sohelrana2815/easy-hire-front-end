import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-50 w-1/4 md:w-1/2 lg:w-1/4  p-10 rounded-none"
        >
          <p className="text-center">
            Still don&apos;t have an account?{" "}
            <Link className="text-success" to="/signUp">
              Sign up
            </Link>
          </p>
          {/* Email */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              {...register("email")}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We&apos;ll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          {/* Password */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Password</Form.Label>
            <Form.Control
              type="password"
              {...register("password")}
              placeholder="Enter Password"
            />
          </Form.Group>
          <button
            type="submit"
            className="w-full p-2  rounded text-white uppercase bg-[#31795A] hover:bg-[#275d48] transition-colors"
          >
            Login
          </button>
          {err && <p className="text-red-500">{err}</p>}
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
