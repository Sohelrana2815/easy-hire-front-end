import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    reset();
    console.log(data);
  };
  return (
    <div className="relative min-h-80 bg-[#244034]">
      <div className="flex flex-col justify-center items-center min-h-80 text-white">
        <h2>Register</h2>
        <p>Create an account & Start posting or hiring talents</p>
      </div>

      <div className="bg-[#EFF6F3] min-h-[62vh] flex items-center justify-center">
        {/* Login Form */}

        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-50 w-1/4 md:w-1/2 lg:w-1/3  p-10 rounded-none"
        >
          <h2 className="text-center">Create Account</h2>
          {/* Name */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              {...register("name")}
              placeholder="Full Name"
            />
          </Form.Group>
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
          {/* PhotoURL */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              {...register("photoURL")}
              placeholder="Photo URL"
            />
          </Form.Group>
          <button
            type="submit"
            className="w-full p-2  rounded text-white uppercase bg-[#31795A] hover:bg-[#275d48] transition-colors"
          >
            Sign up
          </button>
          <p className="text-center mt-3">
            Have an account?{" "}
            <Link className="text-green-700" to="/signIn">
              Sign in
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
