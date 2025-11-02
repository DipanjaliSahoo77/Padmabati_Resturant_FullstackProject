import React from 'react';

const FoodCategories = () => {
  const categories = [
    {
      title: 'Burgers & Fast food',
      subtitle: 'Contact Us',
      image: 'https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/b0b593ccc12b300d27f6c093b2fd681de2d08569?placeholderIfAbsent=true',
      hasSubtitle: true
    },
    {
      title: 'Salads',
      image: 'https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/72328f8db6fd33d44a5838b73060c7989545e460?placeholderIfAbsent=true'
    },
    {
      title: 'Pasta & Casuals',
      image: 'https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/b779fb6cc56d72d68a5d0f5d67652784be457eb2?placeholderIfAbsent=true'
    },
    {
      title: 'Contact Us',
      image: 'https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/20923529ec1a3e3ee8a36c532f7df0f7e7e8e316?placeholderIfAbsent=true',
      isContact: true
    },
    {
      title: 'Breakfast',
      image: 'https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/b9db218265bbd677ec92c14d03edaecbf9d8d59f?placeholderIfAbsent=true'
    },
    {
      title: 'Soups',
      image: 'https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/a06cd4477938f78425a34559cce751295f9409ee?placeholderIfAbsent=true'
    }
  ];

  return (
    <section>
      <h2 className="text-black text-[32px] font-bold ml-[21px] mt-[63px] max-md:max-w-full max-md:mt-10">
        Padmabati Food Junction Favourites
      </h2>
      <div className="flex items-stretch gap-5 flex-wrap mt-[51px] max-md:mr-[5px] max-md:mt-10">
        {categories.map((category, index) => (
          <article key={index} className="bg-[rgba(3,8,31,1)] flex-1 pb-[7px] rounded-xl cursor-pointer hover:transform hover:scale-105 transition-transform">
            <img
              src={category.image}
              className="aspect-[1.17] object-contain w-full rounded-[12px_12px_0px_0px]"
              alt={category.title}
            />
            <div className="flex flex-col items-stretch mt-[9px] px-[22px] max-md:px-5">
              <h3 className={`text-lg font-bold ${category.isContact ? 'text-white' : 'text-[rgba(252,138,6,1)]'}`}>
                {category.title}
              </h3>
              {category.hasSubtitle && (
                <div className="text-white text-[13px] font-normal">
                  {category.subtitle}
                </div>
              )}
              {category.isContact && (
                <div className="text-white text-[13px] font-normal mt-[24px]">
                  Contact Us
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FoodCategories;
