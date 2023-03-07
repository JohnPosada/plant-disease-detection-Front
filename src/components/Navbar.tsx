import { TiLeaf } from "react-icons/ti";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigation: NavigateFunction = useNavigate();

  const { pathname } = useLocation();
  console.log(pathname);

  const onClickLogin = () => {
    navigation("/login");
  };
  const onClickRegister = () => {
    navigation("/register");
  };
  const onClickHome = () => {
    navigation("/");
  };

  return (
    <>
      <div className="bg-H_coffee w-full h-16 ">
        <div className="flex justify-between px-8 h-full items-center align-center">
          <TiLeaf
            onClick={onClickHome}
            className="cursor-pointer icon-left text-4xl text-H_green bg-H_white rounded-3xl border-H_green border-2"
          />
          <div className="flex gap-2">
            {pathname === "/" ? (
              <>
                <button
                  onClick={onClickLogin}
                  className="bg-gray-200 group relative py-1 px-8 overflow-hidden rounded-lg text-lg shadow"
                >
                  <div className="absolute inset-0 w-3 bg-H_green transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span className="relative text-black group-hover:text-white">
                    Login
                  </span>
                </button>
                <button
                  onClick={onClickRegister}
                  className="bg-gray-200 group relative px-8 py-1 overflow-hidden rounded-lg text-lg shadow"
                >
                  <div className="absolute inset-0 w-3 bg-H_green transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span className="relative text-black group-hover:text-white">
                    Sign up{" "}
                  </span>
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
