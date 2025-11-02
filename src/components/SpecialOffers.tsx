import React from 'react';

const SpecialOffers = () => {
  const offers = [
    {
      discount: '-40%',
      category: 'Restaurant',
      title: 'Indian Traditional Specials',
      image: 'https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/7a05a625b4054f5f59865d9d1211c83dfd0695ac?placeholderIfAbsent=true'
    },
    {
      discount: '-20%',
      category: 'Restaurant',
      title: 'Indian Fast Food & Street Favourites',
      image: 'https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/469292335f9ce741c1673637e6abdf0fc4dd2c7f?placeholderIfAbsent=true'
    },
    {
      discount: '-17%',
      category: 'Restaurant',
      title: 'Pizza & Fusion Dishes',
      image: 'https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/386178a9ebceb6af0982d322899755e0ac52ada8?placeholderIfAbsent=true'
    }
  ];

  return (
    <section className="mt-[54px] max-md:max-w-full max-md:mr-[5px] max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        {offers.map((offer, index) => (
          <article key={index} className="w-[33%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col relative min-h-[325px] grow pl-[46px] pr-5 pb-9 rounded-xl max-md:max-w-full max-md:mt-5 max-md:pl-5 cursor-pointer hover:transform hover:scale-105 transition-transform">
              <img
                src={offer.image}
                className="absolute h-full w-full object-cover inset-0 rounded-xl"
                alt={offer.title}
              />
              <div className="relative bg-[rgba(3,8,31,1)] flex flex-col items-stretch text-lg text-white font-bold whitespace-nowrap justify-center p-5 rounded-[0px_0px_12px_12px] w-fit">
                <div>{offer.discount}</div>
              </div>
              <div className="relative flex flex-col items-stretch mt-40 max-md:mt-10">
                <div className="text-[rgba(252,138,6,1)] text-lg font-medium">
                  {offer.category}
                </div>
                <h3 className="text-white text-2xl font-bold">
                  {offer.title}
                </h3>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
