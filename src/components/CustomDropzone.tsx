import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { HiArrowSmDown } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useUploadImageMutation } from "../store/api/plant.api";

export const CustomDropzone = () => {
  const [uploadFile, setUploadFile] = useState<File>();

  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState({
    preview: "",
    path: "",
  });
  const [uploadImage, { isLoading, isError, error }] = useUploadImageMutation();

  const onDrop = (acceptedFiles: File[]) => {
    setUploadFile(acceptedFiles[0]);
    setPreviewImage({
      preview: URL.createObjectURL(acceptedFiles[0]),
      path: acceptedFiles[0].name,
    });
  };
  const { getRootProps, getInputProps, isDragActive, open, acceptedFiles } =
    useDropzone({
      onDrop,
      noClick: true,
      accept: {
        "image/*": [".png", ".jpg"],
      },
      maxFiles: 1,
    });

  const onClickDiagnose = async (file: File | undefined) => {
    if (file) {
      const { photo_url } = await uploadImage(file).unwrap();
      localStorage.setItem("photo_url", photo_url);
      navigate(`/result`);

      // const res = await uploadImage(file).unwrap();
      // console.log(error);
      //
      // console.log(res);
      //
      // navigate(`/result`);
    }
  };

  const onDragActive = () => {
    return (
      <>
        <div className="h-screen w-screen fixed top-0 left-0 bg-black opacity-50"></div>
        <HiArrowSmDown className="text-7xl font-black text-center text-H_white" />
        <p className="text-xl font-black text-center text-H_white">
          Drop the files here ...
        </p>
      </>
    );
  };

  const onDragEmptyNotActive = () => {
    return (
      <>
        <button
          onClick={open}
          className="bg-gray-400 py-1 px-8 rounded-lg text-lg shadow text-H_white"
        >
          Upload image
        </button>

        <p className="text-base text-center text-H_white">
          Drag 'n' drop files here, or click in upload image to select file
        </p>
      </>
    );
  };

  const onDragPreview = () => {
    return (
      <>
        <img src={previewImage.preview} className="h-36" />
        <p className="text-base text-center text-H_white">
          {previewImage.path}
        </p>
        <button
          onClick={open}
          className="bg-gray-400 py-1 px-8 rounded-lg text-lg shadow text-H_white"
        >
          Change image...
        </button>
      </>
    );
  };

  return (
    <div className="w-3/6 flex flex-col items-center gap-1">
      <div
        className="bg-H_coffee w-full h-72 rounded-xl my-8 p-2"
        {...getRootProps()}
      >
        <div className="w-full h-full border-4 border-dashed border-spacing-40 border-H_gray flex flex-col justify-center items-center gap-1 rounded-md">
          <input {...getInputProps()} />
          {isDragActive && onDragActive()}
          {!isDragActive &&
            !!acceptedFiles.length === false &&
            onDragEmptyNotActive()}
          {!isDragActive && !!acceptedFiles.length && onDragPreview()}
        </div>
      </div>
      <button
        className={`bg-gray-200 group relative h-12 w-2/4 overflow-hidden rounded-lg text-lg shadow ${
          !!acceptedFiles.length ? "block" : "hidden"
        }`}
        onClick={() => onClickDiagnose(uploadFile)}
      >
        <div className="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span className="relative text-black group-hover:text-white">
          Diagnose
        </span>
      </button>
    </div>
  );
};
