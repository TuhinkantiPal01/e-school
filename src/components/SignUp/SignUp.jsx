import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import axios from "axios";
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const [image, setImage] = useState(null);
  const [checked, setChecked] = useState(false);
  const { createUser, update } = useContext(AuthContext);

  const handleImageChange = async (e) => {
    let img = e.target.files[0];
    if (img) {
      let formData = new FormData();
      formData.append("image", img);

      try {
        const res = await axios.post(
          `https://api.imgbb.com/1/upload?key=75a57e1c6c52625b2ab6f13559177359`,
          formData
        );
        setImage(res.data.data.url);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const onSubmit = (data) => {
    if (!image) {
      return;
    }
    console.log(data);
    createUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        if (res.user) {
          update(data.name, image);
          reset();
          setImage(null)
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <main className="login-container h-screen">
      <div className="pt-28">
        <h1 className="text-center text-primary text-3xl font-bold">SignUp Now</h1>
      </div>
      <div className="">
        <Card shadow={false} className=" opacity-100 w-[80%] mx-auto">
          <form className="mt-8 mb-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 grid grid-cols-2 gap-6">
              <div>
                <Input
                  size="lg"
                  type="text"
                  label="Name"
                  name="name"
                  {...register("name", { required: "Please Input Your Name" })}
                />
                {errors.name && (
                  <span className="text-xs font-medium text-red-500">{errors.name.message}</span>
                )}
              </div>

              <div>
                <Input
                  size="lg"
                  type="email"
                  label="Email"
                  name="email"
                  {...register("email", { required: "Please Input Your Email" })}
                />
                {errors.email && (
                  <span className="text-xs font-medium text-red-500">{errors.email.message}</span>
                )}
              </div>
              <div>
                <Input
                  type="password"
                  size="lg"
                  label="Password"
                  name="password"
                  {...register("password", {
                    required: "Please Input Your Password",
                    pattern: {
                      value: /^(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/,
                      message:
                        "Password must be at least 8 character One Number and One Special Key",
                    },
                  })}
                />
                {errors.password && (
                  <span className="text-xs font-medium text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <div>
                <Controller
                  name="gender"
                  control={control}
                  rules={{ required: "Please Select Your Gender" }}
                  // defaultValue="" // Set the default value here
                  render={({ field }) => (
                    <Select {...field} size="lg" color="cyan" label="Select Gender">
                      <Option value="male">Male</Option>
                      <Option value="female">Female</Option>
                    </Select>
                  )}
                />
                {errors.gender && (
                  <span className="text-xs font-medium text-red-500">{errors.gender.message}</span>
                )}
              </div>

              <div>
                <Input
                  type="date"
                  size="lg"
                  label="Date Of Birth"
                  name="dob"
                  {...register("dob", { required: "Please Select Your Date Of Birth" })}
                />
                {errors.dob && (
                  <span className="text-xs font-medium text-red-500">{errors.dob.message}</span>
                )}
              </div>

              <div>
                <Input
                  type="file"
                  size="lg"
                  label="Select Your Image"
                  name="image"
                  onChange={handleImageChange}
                  error={!image}
                />
              </div>
            </div>
            <Checkbox
              onChange={() => setChecked(!checked)}
              color="blue"
              label={
                <Typography variant="small" color="gray" className="flex items-center font-normal">
                  I agree the
                  <a href="#" className="font-medium transition-colors hover:text-gray-900">
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button
              disabled={!checked}
              type="submit"
              color="blue"
              size="lg"
              className="w-full rounded-none mt-5"
            >
              Sign Up
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link to="/login" className="font-bold text-light-blue-900">
                Login
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </main>
  );
};

export default SignUp;
