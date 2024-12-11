import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const SignIn = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    reset();
    console.log(data);
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
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
