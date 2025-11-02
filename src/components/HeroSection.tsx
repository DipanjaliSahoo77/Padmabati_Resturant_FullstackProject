import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex flex-col relative min-h-[477px] w-full mt-[100px] pr-[62px] pt-[17px] rounded-xl max-md:max-w-full  max-md:pr-5">
      <img
        src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/f651d372607dfcd09bc4656cfea5a658c4de062b?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0 rounded-xl"
        alt="Restaurant background"
      />
      <div className="relative w-full max-w-[1412px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="relative flex w-full flex-col text-primary leading-[66px] max-md:max-w-full max-md:mt-10">
              <div className="text-xl font-normal max-md:max-w-full">
                Desi Flavours with a blend of Indian aesthetics!
              </div>
              <h1 className="text-[54px] font-bold self-stretch max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
                Where every meal is a <br />
                memory, and every
                <br />
                flavor tells a story.
              </h1>
              <div className="bg-primary border flex items-stretch gap-[13px] text-lg text-primary-foreground font-semibold mt-[37px] px-[30px] py-2 rounded-[120px] border-background max-md:px-5">
                <img
                  src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/a30e88979fc8ce8bf958d0f46540072e41fcaa5d?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-[34px] shrink-0 my-auto"
                  alt="Delivery icon"
                />
                <div className="basis-auto">
                  Delivery in 20-25 Minutes
                </div>
              </div>
            </div>
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/fc99c75392fdad0417ad002e4982d263ab20ac14?placeholderIfAbsent=true"
              className="aspect-[1.61] object-contain w-full grow mt-10 rounded-xl max-md:max-w-full"
              alt="Featured food"
            />
          </div>
        </div>
      </div>
      <div className="relative bg-accent z-10 flex mb-[-29px] items-stretch gap-[13px] text-lg text-accent-foreground font-semibold leading-[66px] mt-[27px] px-[62px] py-3 rounded-[0px_12px_12px_0px] max-md:mb-2.5 max-md:px-5">
        <img
          src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/d956e083e346a16acb9d5967c2c6303056efba6d?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[29px] shrink-0 my-auto"
          alt="Clock icon"
        />
        <div className="basis-auto">Open until 11:00 PM</div>
      </div>
    </section>
  );
};

export default HeroSection;
