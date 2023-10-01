import { Button, Input } from "@material-tailwind/react";

const Contact = () => {
  return (
    <section className="my-10">
      <div className="max-w-7xl mx-auto p-7 mb-10">
        <h1 className="text-5xl text-center font-bold mt-4">Contact US</h1>
      </div>

      <div className="flex items-center gap-x-8">
        <div className="flex-1">
          <img src="https://i.ibb.co/ydmk6yM/pexels-torsten-dettlaff-193003.jpg" alt="img" />
        </div>

        <div className="flex-1">
          <div className="shadow-md p-5">
            <h4 className="text-3xl font-semibold text-secondary">Sent Message Here</h4>
            <form className="mt-10 flex flex-col gap-4">
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
                label="Message"
                className="text-[18px]"
                required
              />

              <div className="mt-10">
                <Button color="blue" size="lg" className="w-full rounded-none">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
