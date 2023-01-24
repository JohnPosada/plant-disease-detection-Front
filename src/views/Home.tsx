import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const onclickButtonStart = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="flex items-center justify-center flex-col ">
        <h1 className="font-serif my-4 font-semibold text-5xl text-H_green">
          Welcome to plant deseases detection!
        </h1>
        <div className="flex align-center justify-center w-2/3">
          <img
            className="w-full h-full"
            src="/src/assets/images/HojaPort.png"
            alt="plant"
          />
        </div>
        <p className="text-H_text font-serif text-xl p-4">
          Duis voluptate velit veniam commodo nostrud dolor. Adipisicing sunt
          nulla irure est dolor consequat veniam ea laboris ut reprehenderit.
          Est nulla est duis dolor sunt non officia. Occaecat ut do eiusmod
          excepteur eu nisi ea tempor ullamco non incididunt. Aute cupidatat
          consequat veniam commodo.
        </p>
        <div className="my-6">
          <button
            onClick={onclickButtonStart}
            className="bg-gray-200 group relative h-12 w-36 overflow-hidden rounded-lg text-xl shadow"
          >
            <div className="absolute inset-0 w-3 bg-H_green transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">
              Start
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
