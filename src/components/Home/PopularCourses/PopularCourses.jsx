import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Rating,
} from "@material-tailwind/react";

const PopularCourses = () => {
  return (
    <section className="bg-[#FAFAFA] my-20 min-h-screen">
      <div className="max-w-7xl mx-auto p-7">
        <h6 className="text-2xl text-center text-primary font-semibold">Whats New</h6>
        <h6 className="text-5xl text-center font-bold mt-4">Popular Online Courses</h6>
        <div className="mt-16 grid grid-cols-3 place-items-center gap-10">
          <div className="transition ease-in-out delay-50 hover:-translate-y-2 duration-300">
            <Card className="mt-6 rounded-none">
              <CardHeader color="blue-gray" className="h-56 rounded-none">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                  className=""
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 transition-all duration-300 hover:text-primary"
                >
                  Web Design
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, minima.
                </Typography>
              </CardBody>
              <CardFooter className="p-0 border-t-2 w-[90%] mx-auto">
                <div className="py-5 flex justify-between items-center">
                  <div>
                    <Rating value={4} readonly />
                  </div>
                  <div className="bg-primary px-3 py-1 rounded-sm text-white">
                    <p className="text-sm font-semibold"><span className="mr-1">20</span>$</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="transition ease-in-out delay-50 hover:-translate-y-2 duration-300">
            <Card className="mt-6 rounded-none">
              <CardHeader color="blue-gray" className="relative h-56 rounded-none">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                  className=""
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 transition-all duration-300 hover:text-primary"
                >
                  Web Design
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, minima.
                </Typography>
              </CardBody>
              <CardFooter className="p-0 border-t-2 w-[90%] mx-auto">
                <div className="py-5 flex justify-between items-center">
                  <div>
                    <Rating value={4} readonly />
                  </div>
                  <div className="bg-primary px-3 py-1 rounded-sm text-white">
                    <p className="text-sm font-semibold"><span className="mr-1">20</span>$</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="transition ease-in-out delay-50 hover:-translate-y-2 duration-300">
            <Card className="mt-6 rounded-none">
              <CardHeader color="blue-gray" className="relative h-56 rounded-none">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                  className=""
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 transition-all duration-300 hover:text-primary"
                >
                  Web Design
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, minima.
                </Typography>
              </CardBody>
              <CardFooter className="p-0 border-t-2 w-[90%] mx-auto">
                <div className="py-5 flex justify-between items-center">
                  <div>
                    <Rating value={4} readonly />
                  </div>
                  <div className="bg-primary px-3 py-1 rounded-sm text-white">
                    <p className="text-sm font-semibold"><span className="mr-1">20</span>$</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="transition ease-in-out delay-50 hover:-translate-y-2 duration-300">
            <Card className="mt-6 rounded-none">
              <CardHeader color="blue-gray" className="relative h-56 rounded-none">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                  className=""
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 transition-all duration-300 hover:text-primary"
                >
                  Web Design
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, minima.
                </Typography>
              </CardBody>
              <CardFooter className="p-0 border-t-2 w-[90%] mx-auto">
                <div className="py-5 flex justify-between items-center">
                  <div>
                    <Rating value={4} readonly />
                  </div>
                  <div className="bg-primary px-3 py-1 rounded-sm text-white">
                    <p className="text-sm font-semibold"><span className="mr-1">20</span>$</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="transition ease-in-out delay-50 hover:-translate-y-2 duration-300">
            <Card className="mt-6 rounded-none">
              <CardHeader color="blue-gray" className="relative h-56 rounded-none">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                  className=""
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 transition-all duration-300 hover:text-primary"
                >
                  Web Design
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, minima.
                </Typography>
              </CardBody>
              <CardFooter className="p-0 border-t-2 w-[90%] mx-auto">
                <div className="py-5 flex justify-between items-center">
                  <div>
                    <Rating value={4} readonly />
                  </div>
                  <div className="bg-primary px-3 py-1 rounded-sm text-white">
                    <p className="text-sm font-semibold"><span className="mr-1">20</span>$</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="transition ease-in-out delay-50 hover:-translate-y-2 duration-300">
            <Card className="mt-6 rounded-none">
              <CardHeader color="blue-gray" className="relative h-56 rounded-none">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                  className=""
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 transition-all duration-300 hover:text-primary"
                >
                  Web Design
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, minima.
                </Typography>
              </CardBody>
              <CardFooter className="p-0 border-t-2 w-[90%] mx-auto">
                <div className="py-5 flex justify-between items-center">
                  <div>
                    <Rating value={4} readonly />
                  </div>
                  <div className="bg-primary px-3 py-1 rounded-sm text-white">
                    <p className="text-sm font-semibold"><span className="mr-1">20</span>$</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
