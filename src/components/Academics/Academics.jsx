import "./Academics.css";
import { BsArrowRightShort } from "react-icons/bs";

const Academics = () => {
  return (
    <main className="pt-20">
      <div className="banner py-40">
        <h1 className="text-center text-primary text-5xl font-bold">Academic Schedule</h1>
      </div>
      <div className="grid grid-cols-5 gap-10 mt-20">
        <div className="bg-primary text-white flex justify-center items-center gap-2">
          <h3 className="text-2xl font-semibold">Class One</h3>
          <BsArrowRightShort size={30} />
        </div>
        <div className="bg-teal-400 text-white p-5">
          <h3 className="text-2xl font-semibold text-center">Class Two</h3>
        </div>
        <div className="bg-blue-400 text-white p-5">
          <h3 className="text-2xl font-semibold text-center">Class Three</h3>
        </div>
        <div className="bg-indigo-400 text-white p-5">
          <h3 className="text-2xl font-semibold text-center">Class Four</h3>
        </div>
        <div className="bg-primary text-white p-5">
          <h3 className="text-2xl font-semibold text-center">Class Five</h3>
        </div>
        <div className="bg-primary text-white p-5">
          <h3 className="text-2xl font-semibold text-center">Class Six</h3>
        </div>
        <div className="bg-primary text-white p-5">
          <h3 className="text-2xl font-semibold text-center">Class Seven</h3>
        </div>
        <div className="bg-primary text-white p-5">
          <h3 className="text-2xl font-semibold text-center">Class Eight</h3>
        </div>
        <div className="bg-primary text-white p-5">
          <h3 className="text-2xl font-semibold text-center">Class Nine</h3>
        </div>
        <div className="bg-primary text-white p-5">
          <h3 className="text-2xl font-semibold text-center">Class Ten</h3>
        </div>
      </div>
    </main>
  );
};

export default Academics;
