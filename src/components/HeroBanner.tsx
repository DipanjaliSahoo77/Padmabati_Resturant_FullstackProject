import React from 'react';

const HeroBanner = () => {
  return (
    <section className="self-center flex w-full max-w-[1533px] flex-col items-stretch max-md:max-w-full mt-10 pt-10">
      <img
        src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/029ae0af17cf745a543568e399997062ac805de4?placeholderIfAbsent=true"
        className="aspect-[2.49] object-contain w-full rounded-xl max-md:max-w-full max-md:mr-[5px]"
        alt="Hero banner showcasing food delivery"
      />
      <h1 className="text-black text-[32px] font-bold ml-[21px] mt-[50px] max-md:max-w-full max-md:mt-10">
        Padmabati Specials 🍛 Up to 40% OFF on your first order!
      </h1>
    </section>
  );
};

export default HeroBanner;
