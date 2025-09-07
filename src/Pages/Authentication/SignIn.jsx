import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import authImage from "../../assets/images/authImage.jpg"

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Perform login API call here
  };

  return (
    <div className="grid grid-cols-8 min-h-screen bg-base-200">
      {/* Left Side */}
      <div
        className="col-span-3 flex flex-col justify-start items-center bg-cover bg-center bg-no-repeat p-8 relative"
        style={{ backgroundImage: `url(${authImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h2 className="text-white text-4xl font-medium leading-relaxed relative z-10 text-center mt-16">
          Book your Hotel
        </h2>
        <p className="text-white text-sm text-center relative z-10">
          More than 50,000 hotels nationwide
        </p>
      </div>

      {/* Right Side */}
      <div className="col-span-5 flex items-center justify-center ">
        <div className="max-w-md w-full bg-white rounded-3xl  shadow-md p-10">
          <h2 className="text-2xl font-medium mb-2">
            Sign in & Explore
          </h2>
          <p className="text-xs mb-6">
            Log into your account with your email, or create one below.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Email or phone number
              </label>
              <div className="relative">
                <input
                  type="text"
                  {...register("username", {
                    required: "Username is required",
                  })}
                  placeholder="Email or phone number"
                  className="w-full border border-base-300 rounded-md p-2 outline-none"
                />
                <FaUser className="absolute inset-y-3 right-3 flex items-center text-gray-500" />
              </div>
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                  })}
                  placeholder="Enter your Password"
                  className="w-full border border-base-300 rounded-md p-2 outline-none"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}

              <div className="flex justify-between items-center mt-2 text-sm">
                <div className="flex items-center opacity-75">
                  <input
                    type="checkbox"
                    {...register("remember")}
                    className="mr-2"
                  />
                  Remember me
                </div>
                {/* <a href="#" className="text-blue-500 hover:underline">
                  Forgot Password?
                </a> */}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#7ED957] hover:shadow-lg transform duration-300 text-black font-medium py-2 rounded-md"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="divider">Or </div>
          {/* Social Login */}
          <div className="flex space-x-4">
            <button className="flex-1 flex items-center justify-center border border-base-300 rounded-md py-2 hover:bg-gray-100">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
            </button>
            <button className="flex-1 flex items-center justify-center border border-base-300 rounded-md py-2 hover:bg-gray-100">
              <img
                src="https://www.svgrepo.com/show/452196/facebook-1.svg"
                alt="Facebook"
                className="w-5 h-5 mr-2"
              />
            </button>
          </div>

          {/* Bottom Signup */}
          <p className="text-center text-sm mt-6">
            Don’t have an account?{" "}
            <Link to='/signup' className="text-[#25D366] hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
