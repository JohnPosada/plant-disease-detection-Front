interface Props {
  title: string;
  text: string;
  image: string;
}

export const StepPreview = ({ title, text, image }: Props) => {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="font-semibold">{title}</h1>
      <img className="h-44 w-[350px]  border-[1px] border-black" src={image} />
      <p className="w-3/5 text-center">{text}</p>
    </div>
  );
};
