import React, { useState } from 'react';

const MenuSidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState('Pizzas');
  
  const menuCategories = [
    'Pizzas', 'Garlic Bread', 'Calzone', 'Kebabas', 'Salads', 
    'Cold drinks', 'Happy Meal®', 'Desserts', 'Hot drinks', 'Sauces', 'Orbit®'
  ];

  return (
    <aside className="grow max-md:mt-5">
      <div className="bg-secondary border flex w-full flex-col pl-[34px] pr-[73px] pt-[46px] pb-[91px] rounded-xl border-border max-md:px-5">
        <div className="flex items-stretch gap-5 text-[32px] text-foreground font-semibold whitespace-nowrap">
          <img
            src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/08d48e821e42edf36872d90ff8eb8e28b2a77cee?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[55px] shrink-0"
            alt="Menu icon"
          />
          <div className="my-auto">Menu</div>
        </div>
        <nav className="text-foreground text-[22px] font-bold leading-[83px] mt-[38px]">
          {menuCategories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`block w-full text-left hover:text-accent transition-colors ${
                selectedCategory === category && index === 0 
                  ? 'text-accent-foreground bg-accent px-2 rounded' 
                  : ''
              }`}
            >
              {category}
            </button>
          ))}
        </nav>
      </div>
      
      <div className="flex flex-col relative aspect-[1.129] w-full pl-[22px] rounded-xl overflow-hidden max-md:pl-5">
        <img
          src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/89371b54ef3be3c31bafe4aab259b19e14938fdb?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt="Special offer background"
        />
        <div className="relative bg-primary flex w-[66px] flex-col items-center text-lg text-primary-foreground font-bold whitespace-nowrap justify-center h-[66px] px-[13px] rounded-[0px_0px_12px_12px]">
          <div>-20%</div>
        </div>
        <div className="relative flex items-stretch gap-5 justify-between mt-[170px] max-md:mt-10">
          <div className="flex flex-col items-stretch">
            <div className="text-accent text-lg font-medium">
              Special Offer
            </div>
            <div className="text-primary-foreground text-2xl font-bold">
              First Order Discount
            </div>
          </div>
          <button className="bg-background flex flex-col items-stretch justify-center px-3.5 py-5 rounded-[45px_0px_12px_0px] hover:opacity-90 transition-opacity">
            <img
              src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/892091bbfc81c791da7f70054e251452237a20db?placeholderIfAbsent=true"
              className="aspect-[0.73] object-contain w-9"
              alt="Arrow icon"
            />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default MenuSidebar;
