import React from "react";

const Landing = () => {
  return (
    <>
      <div id='home'></div>
      <div className="bg-[url('/images/LAND.png')] h-screen bg-cover bg-[16%] overflow-x-hidden sticky top-0 flex flex-col md:flex-row">

        <div className="w-full h-3/4 md:w-4/5 md:h-full md:order-last flex flex-col items-center md:items-start justify-center text-white px-4 md:px-8">
          <div className="flex flex-col items-center md:items-start">
            <p className="fontsize-heading text-shadow-title">GCETTS presents -</p>

            <h1
              id="texatech-heading"
              className="pb-15 font-bold text-center md:text-left font-audioWide text-shadow-title"
              style={{ fontSize: 'clamp(3rem, 14vw, 6rem)'}}
            >
              TEXATECH
            </h1>

            <p className="text-base font-medium text-center md:text-left fontsize-heading text-shadow-title">-coming soon at GCETTS Campus</p>
          </div>
        </div>

        <div className="w-full h-1/2 md:w-1/2 md:h-full md:order-first"></div>
      </div>
    </>
  );
};

export default Landing;