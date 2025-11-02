import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <footer className="bg-[rgba(217,217,217,1)] flex w-full flex-col mt-[45px] pt-[21px] pb-[70px] px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="flex w-full max-w-[1463px] items-center gap-[40px_88px] max-md:max-w-full">
        <div className="self-stretch flex flex-col items-stretch text-[15px] text-[rgba(3,8,31,1)] font-medium whitespace-nowrap">
          <img
            src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/30cf036cdde54807eb8d5c4e100a6efa8bcee2e2?placeholderIfAbsent=true"
            className="aspect-[1.83] object-contain w-full"
            alt="Padmabati Food Junction Logo"
          />
          <div className="self-center flex w-[228px] max-w-full items-stretch gap-3 mt-1.5">
            <img
              src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/ccba6b5e88e5f1ac4aeb00444aba1eae83535b7e?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[25px] shrink-0"
              alt="Location icon"
            />
            <div className="grow shrink w-[186px]">
              Maitribihar,Bhubaneswar
            </div>
          </div>
        </div>
        <div className="self-stretch grow shrink basis-auto my-auto max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-9/12 max-md:w-full max-md:ml-0">
              <div className="flex w-full flex-col items-stretch max-md:max-w-full max-md:mt-10">
                <h3 className="text-[rgba(3,8,31,1)] text-lg font-bold leading-[43px]">
                  Get Exclusive Deals in your Inbox
                </h3>
                <form onSubmit={handleNewsletterSubmit} className="flex items-stretch whitespace-nowrap mt-[23px] max-md:max-w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="youremail@gmail.com"
                    required
                    className="bg-[rgba(217,217,217,1)] flex mr-[-67px] flex-col text-[15px] text-black font-normal leading-[43px] justify-center grow shrink-0 basis-0 w-fit px-[30px] py-2 rounded-[120px] max-md:px-5"
                  />
                  <button
                    type="submit"
                    className="bg-[rgba(252,138,6,1)] flex flex-col items-stretch text-lg text-white font-medium justify-center px-[42px] py-[23px] rounded-[120px] max-md:px-5 hover:opacity-90 transition-opacity"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch leading-[43px] max-md:mt-10">
                <h3 className="text-[rgba(3,8,31,1)] text-lg font-bold">
                  Legal Pages
                </h3>
                <div className="text-black text-[15px] font-normal underline">
                  Terms and conditions
                  <br />
                  Privacy
                  <br />
                  Cookies
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch leading-[43px] my-auto">
          <h3 className="text-[rgba(3,8,31,1)] text-lg font-bold">
            Important Links
          </h3>
          <div className="text-black text-[15px] font-normal underline w-[324px]">
            Get helpSign up to deliver
          </div>
        </div>
      </div>
      <div className="self-center flex w-[104px] max-w-full items-stretch gap-3.5 mt-[7px]">
        <img
          src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/bd3f055a62a7d24cc08ca86bd5abbe2bc1c2e9b2?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[45px] shrink-0 cursor-pointer hover:opacity-80"
          alt="Social media icon"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/dacedca8c7185baafd90e07f2b9010f31270a571?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[45px] shrink-0 cursor-pointer hover:opacity-80"
          alt="Social media icon"
        />
      </div>
      
      <div className="bg-[rgba(3,8,31,1)] flex w-full flex-col text-[15px] text-white font-normal justify-center px-[70px] py-6 mt-8 max-md:max-w-full max-md:px-5">
        <div className="flex w-[1136px] max-w-full items-stretch gap-5 flex-wrap justify-between">
          <div>
            PADMABATI Copyright 2024, All Rights Reserved.
          </div>
          <div>
            Privacy Policy Terms Pricing
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
