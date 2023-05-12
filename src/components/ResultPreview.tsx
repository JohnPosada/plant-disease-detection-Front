interface ResultPreviewProps {
  accuracy: string;
  photo_url: string;
  sickness: string;
}

export const ResultPreview = ({
  accuracy,
  photo_url,
  sickness,
}: ResultPreviewProps) => {
  const googleUrl = import.meta.env.VITE_GOOGLE_STORAGE_URL;

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-H_coffee p-4 rounded-xl">
        <img
          className="h-48 w-auto rounded"
          src={googleUrl + photo_url}
          alt="Plant"
        />
        {+accuracy <= 0.75 ? (
          <p className="text-center text-H_white text-xl mt-3">
            Not found result
          </p>
        ) : (
          <>
            <div className="flex justify-center items-center gap-1 mt-3">
              <p className="text-white font-semibold">Accuracy: </p>
              <p className="text-white font-medium">{accuracy}</p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <p className="text-white font-semibold">Result: </p>
              <p className="text-white font-medium">{sickness}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};
