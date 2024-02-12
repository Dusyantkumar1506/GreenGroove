import React from "react";

const InfoBanner = () => {
  const backgroundImageUrl =
    "https://as1.ftcdn.net/v2/jpg/02/68/34/84/1000_F_268348466_79AqTufNNVNNj9lxOvJeSk9A3KCoZOJW.jpg";

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-64 flex items-center justify-center font-protest"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="text-center text-white">
        <h1 className="text-2xl font-extrabold sm:text-5xl">
          FRESH & NON-GMO PRODUCTS
        </h1>
        <p className="mt-4 sm:text-base  text-xs">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          illo tenetur m ipsum dolor sit amet consectetur, fuga ducimus numquam
          ea!
        </p>
      </div>
    </section>
  );
};

export default InfoBanner;
