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
  return (
    <>
      <div className="bg-H_coffee p-4 rounded-xl">
        <img className="h-48 w-full" src={photo_url} alt="Plant" />
        <div className="flex justify-center items-center gap-1 mt-3">
          <p className="text-white font-semibold">Accuracy: </p>
          <p className="text-white font-medium">{accuracy}</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <p className="text-white font-semibold">Result: </p>
          <p className="text-white font-medium">{sickness}</p>
        </div>
      </div>
    </>
  );
};
