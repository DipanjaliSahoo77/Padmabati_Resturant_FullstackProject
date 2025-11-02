import React from 'react';

const CallToAction = () => {
  return (
    <section className="mt-[87px] rounded-xl max-md:max-w-full max-md:mt-10 max-md:pr-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/0c5ff828dfa9e797b35ef3bcbc6ab5c8f2e8b285?placeholderIfAbsent=true"
            className="aspect-[1.28] object-contain w-full grow -mt-10 max-md:max-w-full"
            alt="Food delivery illustration"
          />
        </div>
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch text-[40px] text-[rgba(3,8,31,1)] font-medium tracking-[-2.4px] mt-[227px] max-md:max-w-full max-md:mt-10">
            <button className="bg-[rgba(252,138,6,1)] flex flex-col justify-center px-[70px] py-[15px] rounded-[120px] max-md:max-w-full max-md:px-5 hover:opacity-90 transition-opacity">
              <div className="max-md:max-w-full">
                Don't Miss Out! Limited Time Offer.
              </div>
            </button>
            <button className="bg-[rgba(252,138,6,1)] self-center flex w-[359px] max-w-full flex-col items-stretch justify-center ml-[82px] mt-[50px] px-9 py-[51px] rounded-[120px] max-md:mt-10 max-md:px-5 hover:opacity-90 transition-opacity">
              <div>Place Your Food</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
