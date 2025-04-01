import React from 'react';

const Events = ({heading, contents, rotation}) => {

  const EventSet = contents.map((content, index) => (
    <div
      key={index}
      className="min-w-40 p-5 rounded-xl flex justify-center text-white bg-white/20 border border-white/50 shadow-lg"
    >
      {content}
    </div>
  ));

  return (
    <>
    <div id = 'events' className="p-6 my-8 perspective-distant">
      <div className= 'rounded-xl flex flex-col bg-white/10 backdrop-blur border-2 border-white/20 shadow-lg hover:scale-115 hover:bg-white/20 hover:border-white hover:shadow-[0_0_2px_2px_white] transition duration-300' style={{transformStyle: 'preserve-3d', transform: `rotateY(${rotation}deg)`}}>

        <div className="w-full p-6 flex items-center justify-center">
          <h2 className="fontsize-heading font-bold text-white">{heading}</h2>
        </div>

        <div className="w-full pb-6 flex flex-wrap items-center justify-center gap-4">
          {EventSet}
        </div>
      </div>
    </div>
    </>
  );
};

export default Events;