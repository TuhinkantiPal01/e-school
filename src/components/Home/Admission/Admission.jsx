import { Alert, Button, Input, Option, Select } from "@material-tailwind/react";

const Admission = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto p-7">
        <h1 className="text-5xl text-center font-bold mt-4">Admission Now</h1>
      </div>

      <div className="flex gap-x-14 mt-14 items-center">
        <div className="flex-1">
          <img
            src="https://i.ibb.co/WBfKp4t/Blue-Illustration-With-Type-International-Student-Day-Instagram-Post.jpg"
            alt=""
          />
        </div>
        <div className="flex-1">
          <div className="shadow-md p-5">
            <h4 className="text-3xl font-semibold text-secondary">Get Information Here</h4>
            <form className="mt-10 grid grid-cols-2 gap-x-8 gap-y-14">
              <Input
                color="cyan"
                size="lg"
                variant="standard"
                label="Name"
                className="text-[18px]"
                required
              />
              <Input
                color="cyan"
                size="lg"
                variant="standard"
                label="Email"
                className="text-[18px]"
                required
              />
              <Input
                color="cyan"
                size="lg"
                variant="standard"
                label="Number"
                className="text-[18px]"
                required
              />
              <Select size="lg" color="cyan" variant="standard" label="Gender">
                <Option>Male</Option>
                <Option>Female</Option>={" "}
              </Select>
              <Select size="lg" color="cyan" variant="standard" label="Select School">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
              <Select size="lg" color="cyan" variant="standard" label="Select Class">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
              <Select size="lg" color="cyan" variant="standard" label="Select Subject">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>

              </Select>
              <div>
                <Alert color="blue" className="rounded-none">
                  Available Seats : 0
                </Alert>
              </div>
              <div className="col-span-2">
              <Button color="blue" size="lg" className="w-full rounded-none">Admission Now</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admission;

// https://i.ibb.co/WBfKp4t/Blue-Illustration-With-Type-International-Student-Day-Instagram-Post.jpg
