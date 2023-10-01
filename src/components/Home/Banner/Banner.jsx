import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Banner.css";
// import required modules
import {Autoplay, Pagination } from "swiper/modules";
// import { Button } from "@material-tailwind/react";
import PrimaryButton from "../../lib/Button/PrimaryButton";

const Banner = () => {
  return (
    <section className="py-[10%]">
      <div className="max-h-[400px]">
        {" "}
        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay,Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="relative overflow-hidden w-full  bg-cover bg-no-repeat p-12 text-center"
              style={{
                backgroundImage: `url("https://i.ibb.co/qFHJYFm/banner-1.jpg")`,
                height: "550px",
              }}
            >
              <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <div className="flex h-full items-center justify-center">
                  <div className="text-white">
                    <h2 className="mb-4 text-6xl font-semibold text-[#31E1F7]">
                      Effective Learning
                    </h2>
                    <h4 className="mb-6 text-xl font-semibold">
                      Learn For Your Feature Not For Examination
                    </h4>
                    <PrimaryButton text={"Admission Now"} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="relative overflow-hidden w-full  bg-cover bg-no-repeat p-12 text-center"
              style={{
                backgroundImage: `url("https://i.ibb.co/QKwgVJm/banner-2.jpg")`,
                height: "550px",
              }}
            >
              <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <div className="flex h-full items-center justify-center">
                  <div className="text-white">
                    <h2 className="mb-4 text-6xl font-semibold text-[#31E1F7]">
                      Experience Teachers
                    </h2>
                    <h4 className="mb-6 text-xl font-semibold">
                      Best Teacher Growth You Better Way
                    </h4>
                    <PrimaryButton text={"Admission Now"} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="relative overflow-hidden w-full  bg-cover bg-no-repeat p-12 text-center"
              style={{
                backgroundImage: `url("https://i.ibb.co/9Vmr9Rb/banner-3.jpg")`,
                height: "550px",
              }}
            >
              <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <div className="flex h-full items-center justify-center">
                  <div className="text-white">
                    <h2 className="mb-4 text-6xl font-semibold text-[#31E1F7]">
                      Exclusive Classroom
                    </h2>
                    <h4 className="mb-6 text-xl font-semibold">
                      Environment is The Most Important For Learning
                    </h4>
                    <PrimaryButton text={"Admission Now"} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;


// https://i.ibb.co/qFHJYFm/banner-1.jpg
// https://i.ibb.co/QKwgVJm/banner-2.jpg
// https://i.ibb.co/9Vmr9Rb/banner-3.jpg