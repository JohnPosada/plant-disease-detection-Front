import { useEffect, useState } from "react";
import { TbLeaf, TbLeafOff } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { useAuthStore } from "../hooks/useAuthStore";
import { useGetResultQuery } from "../store/api/plant.api";
import { deseasesDefinitions } from "../data/deseasesDefinitions";

export const ResultPage = () => {
  const [readMore, setReadMore] = useState(false);
  const [isPolling, setIsPolling] = useState(true);
  const [isTimeout, setIsTimeout] = useState(false);

  const { user } = useAuthStore();
  const photo_url = localStorage.getItem("photo_url") ?? "";
  const googleUrl = import.meta.env.VITE_GOOGLE_STORAGE_URL;

  const { data: resultado } = useGetResultQuery(photo_url, {
    pollingInterval: isPolling ? 1000 : undefined,
  });
  const { data } = resultado ?? {};

  useEffect(() => {
    if (data && data.accuracy !== "") setIsPolling(false);

    setTimeout(() => {
      setIsPolling(false);
      if (data && data.accuracy === "" && !isPolling) setIsTimeout(true);
    }, 10000);
  }, [data]);

  const handleReadMore = () => {
    setReadMore(!readMore);
  };

  const notFoundResult = () => {
    return (
      <div className="w-full h-full flex flex-col gap-4 justify-center items-center">
        <p className="text-H_green text-lg font-semibold">
          Sorry, we can't find your plant. Please try again.
        </p>
        <NavLink
          className="bg-gray-200 group relative py-1 px-8 overflow-hidden rounded-lg text-xl shadow"
          to="/"
        >
          <div className="absolute inset-0 w-3 bg-H_green transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative text-H_brown text-xl group-hover:text-white">
            Try again
          </span>
        </NavLink>
      </div>
    );
  };

  if (isPolling) return <Spinner />;

  if (isTimeout || (data && +data?.accuracy <= 75)) return notFoundResult();

  return (
    <div className="w-full p-10">
      <h1 className="text-2xl font-semibold mb-8 text-H_green">
        Hi {user?.username}, this is your result:
      </h1>
      <div className="flex flex-col justify-center items-center">
        <img
          className=" border-2 rounded-3xl mb-4"
          src={googleUrl + photo_url ?? ""}
          alt=""
        />
        <hr className="bg-H_green h-[2px] w-9/12 rounded-full" />
        <div className="flex flex-col justify-center mt-6 mb-3">
          <h1 className="text-4xl font-bold mb-2 text-H_green">
            {data?.sickness.replaceAll("_", " ") ?? ""}
          </h1>
          {data &&
            deseasesDefinitions.map((desease) => {
              if (desease.name === data?.sickness) {
                return (
                  <p
                    className={`text-lg text-H_brown text-center ${
                      readMore ? "" : "line-clamp-3"
                    }`}
                  >
                    {desease.description}
                  </p>
                );
              }
            })}
          <div className="flex justify-center py-2">
            {readMore ? (
              <div
                className="cursor-pointer flex justify-center"
                onClick={handleReadMore}
              >
                <TbLeafOff className="text-2xl text-H_green " />
                <p className="text-sm text-H_green">less</p>
              </div>
            ) : (
              <div
                className="cursor-pointer flex justify-center"
                onClick={handleReadMore}
              >
                <TbLeaf className="text-2xl text-H_green " />
                <p className="text-sm text-H_green">more</p>
              </div>
            )}
          </div>
          {/* <p className="text-lg text-H_brown underline">see more...</p> */}
        </div>
      </div>
      <div className="flex items-center flex-col justify-center gap-1">
        <p className="text-H_green text-lg font-semibold">not helpful?</p>
        <NavLink
          className="bg-gray-200 group relative py-1 px-8 overflow-hidden rounded-lg text-xl shadow"
          to="/"
        >
          <div className="absolute inset-0 w-3 bg-H_green transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative text-H_brown group-hover:text-white">
            Try again
          </span>
        </NavLink>
      </div>
    </div>
  );
};
