import Admission from "../Admission/Admission";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import PopularCourses from "../PopularCourses/PopularCourses";
import PopularTeachers from "../PopularTeachers/PopularTeachers";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <section>
      <Banner />
      <Testimonial/>
      <PopularCourses/>
      <PopularTeachers/>
      <Admission/>
      <Contact/>
    </section>
  );
};

export default Home;
