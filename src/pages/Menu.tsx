import React from 'react';
import LocationHeader from '@/components/LocationHeader';
import HeroSection from '@/components/HeroSection';
import SearchBar from '@/components/SearchBar';
import MenuSidebar from '@/components/MenuSidebar';
import PizzaCard from '@/components/PizzaCard';
import ShoppingCart from '@/components/ShoppingCart';
import DeliveryInfo from '@/components/DeliveryInfo';
import CustomerReviews from '@/components/CustomerReviews';
import Footer from '@/components/Footer';
import Header from '@/components/Header';


const Menu = () => {
  const pizzas = [
    {
      name: "Farm House Xtreme Pizza",
      description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
      image: "https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/177c3327fba56f00f3f0f8f71110875521452f3e?placeholderIfAbsent=true",
      rating: "https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/77dd520bf4e02425783d5550d6ee6a4ef8c962bb?placeholderIfAbsent=true",
      sizes: [
        { name: "Small", price: "£21.90", selected: true },
        { name: "Medium", price: "£25.90" },
        { name: "XL Large with Sauces", price: "£32.90" },
        { name: "Large", price: "£27.90" }
      ]
    },
    {
      name: "Deluxe Pizza",
      description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
      image: "https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/d8b1759c60e53d56657e53710bb62b5a84542185?placeholderIfAbsent=true",
      rating: "https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/8b726ac8b09c101de329891826dd7fe884f7d270?placeholderIfAbsent=true",
      sizes: [
        { name: "Small", price: "£21.90", selected: true },
        { name: "Medium", price: "£25.90" },
        { name: "XL Large with Sauces", price: "£32.90" },
        { name: "Large", price: "£27.90" }
      ]
    },
    {
      name: "Tandoori Pizza",
      description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
      image: "https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/6b8fc9adb79cd3d920f14bc5e5e8f31fc6edb81d?placeholderIfAbsent=true",
      rating: "https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/1a4c9415d293aa79a79401860572a21218a171cc?placeholderIfAbsent=true",
      sizes: [
        { name: "Small", price: "£21.90", selected: true },
        { name: "Medium", price: "£25.90" },
        { name: "XL Large with Sauces", price: "£32.90" },
        { name: "Large", price: "£27.90" }
      ]
    }
  ];

  return (
    <div className="bg-background flex flex-col overflow-hidden items-center">
      <div className="flex w-full max-w-[1528px] flex-col items-stretch max-md:max-w-full">
        <Header />
        <HeroSection />
        
        <SearchBar />
        
        <main className="w-full max-w-[1528px] mt-[46px] max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[24%] max-md:w-full max-md:ml-0">
              <MenuSidebar />
            </div>
            
            <div className="w-[76%] ml-5 max-md:w-full max-md:ml-0">
              <div className="w-full max-md:max-w-full max-md:mt-5">
                <div className="flex items-stretch gap-[40px_100px] flex-wrap ml-8 max-md:max-w-full">
                  <h2 className="text-foreground text-[32px] font-semibold my-auto">
                    Pizzas
                  </h2>
                  <div className="grow shrink basis-auto max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                      <div className="w-[43%] max-md:w-full max-md:ml-0">
                        <div className="bg-secondary border flex items-stretch gap-[40px_75px] self-stretch text-base text-foreground font-normal w-full my-auto pl-10 pr-[13px] py-[11px] rounded-[120px] border-border max-md:mt-10 max-md:pl-5">
                          <div className="my-auto">Sort by Pricing</div>
                          <img
                            src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/01590a213ca66efc046f0f619b1597b503d0ce46?placeholderIfAbsent=true"
                            className="aspect-[1] object-contain w-[30px] shrink-0"
                            alt="Sort icon"
                          />
                        </div>
                      </div>
                      <div className="w-[57%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="bg-accent flex grow items-stretch gap-[21px] text-lg text-accent-foreground font-semibold leading-[66px] w-full px-[47px] py-[30px] rounded-lg max-md:mt-[39px] max-md:px-5">
                          <img
                            src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/11d4bee91b304a3984531a273e480921c043a99b?placeholderIfAbsent=true"
                            className="aspect-[1] object-contain w-[58px] shrink-0 my-auto"
                            alt="Clock icon"
                          />
                          <div className="grow shrink w-[182px]">
                            Open until 11:00 PM
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-[18px] max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                    <div className="w-[67%] max-md:w-full max-md:ml-0">
                      <div className="w-full max-md:max-w-full max-md:mt-5">
                        {pizzas.map((pizza, index) => (
                          <div key={index} className={index > 0 ? "mt-[31px]" : ""}>
                            <PizzaCard {...pizza} />
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <ShoppingCart />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      <DeliveryInfo />
      
      <section className="shadow-[5px_5px_14px_rgba(0,0,0,0.25)] relative min-h-[659px] w-full gap-5 flex-wrap mt-[98px] px-20 py-[60px] rounded-xl max-md:max-w-full max-md:mt-10 max-md:px-5">
        <img
          src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/d9805d1ddd6c88e6d8b60cc8c16f2dd1a682ce7e?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0 rounded-xl"
          alt="Restaurant location background"
        />
        <div className="relative bg-primary/97 text-primary-foreground font-bold px-[43px] py-[109px] rounded-xl max-md:max-w-full max-md:px-5 max-md:py-[100px]">
          <h2 className="text-[32px] leading-[38px] w-[423px]">
            McDonald's
            <br />
            <span className="font-semibold text-[22px] text-accent">
              South London
            </span>
          </h2>
          <div className="text-lg mt-10">
            <span className="font-normal leading-[31px]">
              Tooley St, London Bridge, London SE1 2TF,United Kingdom
            </span>
            <br />
            <span className="leading-[46px]">Phone number</span>
            <br />
            <span className="font-normal text-2xl leading-[38px] text-accent">
              +934443-43
            </span>
            <br />
            <span className="leading-[46px]">Website</span>
            <br />
            <span className="font-normal text-2xl leading-[38px] text-accent">
              http://mcdonalds.uk/
            </span>
          </div>
        </div>
        <div className="relative flex items-start my-auto">
          <div className="bg-background shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex mr-[-46px] flex-col text-base text-primary font-normal leading-5 justify-center mt-[25px] px-[70px] py-[21px] rounded-xl max-md:px-5">
            <div className="w-[241px]">
              <span className="font-semibold text-primary">
                McDonald's
              </span>
              <span className="text-primary">South London</span>
            </div>
          </div>
          <div className="bg-primary flex flex-col items-center justify-center w-[73px] h-[73px] px-3.5 rounded-[50%]">
            <img
              src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/5a2530c6132ceb235b20110f2a39749ae229dc11?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[45px]"
              alt="Location pin"
            />
          </div>
        </div>
      </section>
      
      <CustomerReviews />
      
    </div>
  );
};

export default Menu;
