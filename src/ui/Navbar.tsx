import { useEffect, useRef, useState } from "react";
import { BiUser } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";
import { logout } from "../store/auth/authSlice";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const refNavbar = useRef<HTMLDivElement>(null);

  const navigation = useNavigate();
  const { status, startLogout } = useAuthStore();
  const { pathname } = useLocation();

  const onClickUser = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const onClickEventUser = (e: Event) => {
      if (refNavbar.current && !refNavbar.current.contains(e.target as Node)) {
        setOpenMenu(false);
      }
    };
    if (openMenu) {
      window.addEventListener("click", onClickEventUser);
    }

    return () => {
      window.removeEventListener("click", onClickEventUser);
    };
  }, [openMenu]);

  const dropdownMenu = () => {
    return (
      <div
        className={`absolute right-0 z-10 mt-1 w-56  p-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
      >
        <div className="py-1" role="none">
          <NavLink
            to="/account"
            className="text-gray-700 block px-4 py-2 text-lg"
          >
            Account settings
          </NavLink>
          <NavLink
            to="/history"
            className="text-gray-700 block px-4 py-2 text-lg"
          >
            History
          </NavLink>
          <NavLink
            to="/"
            className="text-gray-700 block px-4 py-2 text-lg"
            onClick={() => {
              startLogout();
              onClickUser();
            }}
          >
            Sign out
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="bg-H_coffee w-full h-full ">
        <div className="flex justify-between px-8 h-full items-center align-center">
          <img
            src="/src/assets/images/Logo.png"
            onClick={() => {
              navigation("/");
            }}
            className="h-16 cursor-pointer"
            alt="Plant Care App"
          />
          <div className="flex gap-2">
            {pathname === "/" && status === "unauthenticated" && (
              <>
                <button
                  onClick={() => {
                    navigation("/login");
                  }}
                  className="bg-gray-200 group relative py-1 px-8 overflow-hidden rounded-lg text-lg shadow"
                >
                  <div className="absolute inset-0 w-3 bg-H_green transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span className="relative text-H_brown group-hover:text-white">
                    Login
                  </span>
                </button>
                <button
                  onClick={() => {
                    navigation("/register");
                  }}
                  className="bg-gray-200 group relative px-8 py-1 overflow-hidden rounded-lg text-lg shadow"
                >
                  <div className="absolute inset-0 w-3 bg-H_green transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span className="relative text-H_brown group-hover:text-white">
                    Sign up{" "}
                  </span>
                </button>
              </>
            )}
            {status === "authenticated" && (
              <>
                <div className="relative inline-block text-left">
                  <div ref={refNavbar}>
                    <BiUser
                      className="text-5xl text-H_green rounded-full bg-white cursor-pointer"
                      onClick={onClickUser}
                    />
                  </div>

                  {openMenu && dropdownMenu()}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
