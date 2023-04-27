import { ResultPreview } from "../components/ResultPreview";
import { Spinner } from "../components/Spinner";
import { previewImages } from "../data/previewImages";
import { useAuthStore } from "../hooks/useAuthStore";
import { useGetPhotosQuery } from "../store/api/plant.api";

export const HistorialPage = () => {
  const { data: dataHistorial, isLoading } = useGetPhotosQuery();
  const { data: photos } = dataHistorial ?? {};

  isLoading && <Spinner />;

  return (
    <div className="h-full w-full p-6">
      <div className=" h-[10%] flex justify-center items-center">
        <h1 className="text-H_green text-center font-semibold text-3xl">
          Diagnosis History
        </h1>
      </div>
      <div className="mt-6 grid grid-cols-4 gap-10 ">
        {photos?.map((photo) => (
          <ResultPreview key={photo.photo_url} {...photo} />
        ))}
      </div>
    </div>
  );
};
