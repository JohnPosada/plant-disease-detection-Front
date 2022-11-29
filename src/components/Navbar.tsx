import { TiLeaf } from "react-icons/ti";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigation: NavigateFunction = useNavigate();

  const onClickLogin = () => {
    navigation("/login");
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
          <button
            onClick={onClickLogin}
            className="flex flex-row-reverse bg-white border-H_green border-4 rounded-xl px-2 "
          >
            <p className=" text-H_text text-2xl font-serif">Iniciar sesión</p>
            <TiLeaf className="m-1 text-2xl text-H_text" />
          </button>
        </div>
      </div>
    </>
  );
};
