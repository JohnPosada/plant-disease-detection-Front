import { CustomDropzone } from "../components/CustomDropzone";
import { StepPreview } from "../components/StepPreview";
import { stepsPreview } from "../data/stepsPreview";

export const HomePage = () => {
  return (
    <div className="flex flex-col py-4 w-full items-center ">
      {/* <h1 className="text-5xl my-1 text-H_green">Welcome to plant care app!</h1> */}
      <h2 className="text-3xl my-8 text-H_green">
        We show you how it works step by step:
      </h2>
      <div className="flex justify-center gap-4 ">
        {stepsPreview.map((step) => {
          return <StepPreview {...step} key={step.id} />;
        })}
      </div>
      <CustomDropzone />
    </div>
  );
};
