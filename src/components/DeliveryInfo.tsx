import React from 'react';

const DeliveryInfo = () => {
  return (
    <section className="bg-secondary shadow-[5px_5px_14px_rgba(0,0,0,0.25)] flex w-[1528px] max-w-full items-stretch gap-5 font-bold flex-wrap justify-between mt-24 pl-20 rounded-xl max-md:mt-10 max-md:pl-5">
      <div className="text-foreground text-lg my-auto">
        <span className="text-[32px] leading-[48px] text-primary">
          Delivery information
        </span>
        <br />
        <span className="leading-[46px]">Monday: </span>
        <span className="font-normal leading-[46px]">
          12:00 AM–3:00 AM, 8:00 AM–3:00 AM
        </span>
        <br />
        <span className="leading-[46px]">Tuesday: </span>
        <span className="font-normal leading-[46px]">8:00 AM–3:00 AM</span>
        <br />
        <span className="leading-[46px]">Wednesday: </span>
        <span className="font-normal leading-[46px]">8:00 AM–3:00 AM</span>
        <br />
        <span className="leading-[46px]">Thursday: </span>
        <span className="font-normal leading-[46px]">8:00 AM–3:00 AM</span>
        <br />
        <span className="leading-[46px]">Friday: </span>
        <span className="font-normal leading-[46px]">8:00 AM–3:00 AM</span>
        <br />
        <span className="leading-[46px]">Saturday: </span>
        <span className="font-normal leading-[46px]">8:00 AM–3:00 AM</span>
        <br />
        <span className="leading-[46px]">Sunday: </span>
        <span className="font-normal leading-[46px]">8:00 AM–12:00 AM</span>
        <br />
        <span className="leading-[46px]">Estimated time until delivery: </span>
        <span className="font-normal leading-[46px]">20 min</span>
      </div>
      
      <div className="bg-primary shadow-[5px_5px_14px_rgba(0,0,0,0.25)] flex flex-col items-stretch text-primary-foreground px-[63px] py-[138px] rounded-[0px_12px_12px_0px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
        <div className="flex items-stretch gap-[15px] text-[32px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/d17d2018c99bb57699e12a69f0d13b513a398a03?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[45px] shrink-0"
            alt="Clock icon"
          />
          <div className="grow shrink w-[293px] basis-auto my-auto">
            Operational Times
          </div>
        </div>
        <div className="text-base leading-[46px] mt-[47px] max-md:mt-10">
          <span className="font-bold">Monday: </span>
          <span className="font-normal">8:00 AM–3:00 AM</span>
          <br />
          <span className="font-bold">Tuesday: </span>
          <span className="font-normal">8:00 AM–3:00 AM</span>
          <br />
          <span className="font-bold">Wednesday: </span>
          <span className="font-normal">8:00 AM–3:00 AM</span>
          <br />
          <span className="font-bold">Thursday: </span>
          <span className="font-normal">8:00 AM–3:00 AM</span>
          <br />
          <span className="font-bold">Friday: </span>
          <span className="font-normal">8:00 AM–3:00 AM</span>
          <br />
          <span className="font-bold">Saturday: </span>
          <span className="font-normal">8:00 AM–3:00 AM</span>
          <br />
          <span className="font-bold">Sunday: </span>
          <span className="font-normal">8:00 AM–3:00 AM</span>
        </div>
      </div>
    </section>
  );
};

export default DeliveryInfo;
