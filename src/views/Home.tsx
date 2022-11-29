export const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col ">
        <h1 className="font-serif my-4 font-semibold text-8xl text-H_green">
          Bienvenido a diagnosticos hoja
        </h1>
        <div className="flex align-center justify-center">
          {/* <img
            className="w-2/3 h-1/3  "
            src="/src/assets/images/BgHoja.svg"
            alt="sadsad"
          /> */}
        </div>
        <p className="text-H_text font-serif text-3xl p-4">
          Duis voluptate velit veniam commodo nostrud dolor. Adipisicing sunt
          nulla irure est dolor consequat veniam ea laboris ut reprehenderit.
          Est nulla est duis dolor sunt non officia. Occaecat ut do eiusmod
          excepteur eu nisi ea tempor ullamco non incididunt. Aute cupidatat
          consequat veniam commodo.
        </p>
        <div className="my-6">
          <button className="text-H_white bg-H_green p-4 w-48 h-20 text-4xl font-serif rounded-md">
            Empezar
          </button>
        </div>
      </div>
    </>
  );
};
