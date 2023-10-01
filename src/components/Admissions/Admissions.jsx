import { Alert, Button, Input, Option, Select } from "@material-tailwind/react";
import "./Admissions.css"

const Admissions = () => {
    return (
        <main className="pt-20">
           <div className="banner py-40">
                <h1 className="text-center text-primary text-5xl font-bold">Admission Now</h1>
           </div>
           <div>
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
        </main>
    );
};

export default Admissions;