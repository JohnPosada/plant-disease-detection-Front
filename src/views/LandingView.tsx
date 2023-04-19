import { useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export const LandingView = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center justify-center flex-col  h-full">
        <h1 className="my-2 font-semibold text-5xl text-H_green">
          Welcome to plant care app!
        </h1>
        <div className="flex align-center justify-center w-2/3">
          <img
            className="w-full h-full"
            src="/src/assets/images/HojaPort.png"
            alt="plant"
          />
        </div>
        <p className="text-H_brown max-w-7xl text-center text-xl p-4">
          Welcome to our website, dedicated to helping you detect diseases in
          plants. We understand the importance of healthy crops and the
          devastating effects that diseases can have on them. Our goal is to
          provide you with the tools and resources necessary to identify and
          manage plant diseases quickly and effectively.
          <br />
          We use a plant disease diagnostic tool that uses AI to analyze photos
          of plants and provide real-time diagnoses.
        </p>
        <div className="my-6">
          <button
            onClick={() => navigate("/login")}
            className="bg-gray-200 group relative h-12 w-36 overflow-hidden rounded-lg text-xl shadow"
          >
            <div className="absolute inset-0 w-3 bg-H_green transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-H_brown group-hover:text-white">
              <div className="flex justify-center items-center gap-1">
                Start
                <HiOutlineArrowNarrowRight />
              </div>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
