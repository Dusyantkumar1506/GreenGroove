import React from "react";

const Banner = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat font-protest max-w-full"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/premium-photo/fresh-fruits-vegetables-berries-black-background-banner-top-view-free-space-your-text_187166-37636.jpg")',
      }}
    >
      <div className="relative flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold sm:text-8xl text-white ">
            100% ORGANIC
          </h1>

          <p className="mt-4 text-center text-white max-w-xl mx-auto ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <button className="mt-8 font-medium text-white bg-transparent border border-white rounded-full px-10 py-2 hover:bg-white hover:text-black transition duration-300 ease-in-out">
            Get This
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
