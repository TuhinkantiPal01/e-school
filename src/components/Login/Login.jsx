import { Card, Input, Button, Typography } from "@material-tailwind/react";

import "./Login.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    login(data.email, data.password)
      .then((data) => {
        console.log(data);
        reset();
      })
      .catch((err) => setError(err.code));
  };

  return (
    <main className="login-container h-screen">
      <div className="pt-28 pb-8">
        <h1 className="text-center text-primary text-3xl font-bold">Login Now</h1>
      </div>
      <div className="">
        <Card color="transparent" shadow={false} className="items-center opacity-100">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-4 flex flex-col gap-6">
              <div>
                <Input
                  size="lg"
                  label="Email"
                  {...register("email", { required: "Please Enter Your Email" })}
                />
                {errors.email && (
                  <span className="text-xs font-medium text-red-500">{errors.email.message}</span>
                )}
              </div>

              <Input
                type="password"
                size="lg"
                label="Password"
                {...register("password", { required: "Please Enter Your Password" })}
              />
              {errors.password && (
                <span className="text-xs font-medium text-red-500">{errors.password.message}</span>
              )}
            </div>

            <Button type="submit" color="blue" size="lg" className="w-full rounded-none mt-5">
              Login
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link to="/signUp" className="font-bold text-light-blue-900">
                Sign Up
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </main>
  );
};

export default Login;
