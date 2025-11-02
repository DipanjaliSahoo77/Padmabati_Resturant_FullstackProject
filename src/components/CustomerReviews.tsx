import React from 'react';

interface Review {
  id: string;
  name: string;
  location: string;
  date: string;
  rating: string;
  comment: string;
  avatar: string;
}

const CustomerReviews = () => {
  const reviews: Review[] = [
    {
      id: '1',
      name: 'St Glx',
      location: 'South London',
      date: '24th September, 2023',
      rating: 'https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/4f1e31b530b036fdb31a0b6153125423ead94db8?placeholderIfAbsent=true',
      comment: 'The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald\'s standard – hot and satisfying.',
      avatar: 'https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/447d343393d6917962981d017e9e906de8fa66e5?placeholderIfAbsent=true'
    },
    {
      id: '2',
      name: 'St Glx',
      location: 'South London',
      date: '24th September, 2023',
      rating: 'https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/4f1e31b530b036fdb31a0b6153125423ead94db8?placeholderIfAbsent=true',
      comment: 'The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald\'s standard – hot and satisfying.',
      avatar: 'https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/447d343393d6917962981d017e9e906de8fa66e5?placeholderIfAbsent=true'
    },
    {
      id: '3',
      name: 'St Glx',
      location: 'South London',
      date: '24th September, 2023',
      rating: 'https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/4f1e31b530b036fdb31a0b6153125423ead94db8?placeholderIfAbsent=true',
      comment: 'The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald\'s standard – hot and satisfying.',
      avatar: 'https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/447d343393d6917962981d017e9e906de8fa66e5?placeholderIfAbsent=true'
    }
  ];

  return (
    <section className="bg-muted self-stretch flex w-full flex-col items-center mt-[130px] px-20 py-[108px] max-md:max-w-full max-md:mt-10 max-md:pb-[100px] max-md:px-5">
      <div className="flex w-full max-w-[1508px] items-stretch gap-5 flex-wrap justify-between max-md:max-w-full">
        <h2 className="text-foreground text-[44px] font-bold my-auto max-md:max-w-full">
          Customer Reviews
        </h2>
        <div className="flex items-stretch gap-[22px]">
          <button className="hover:opacity-70 transition-opacity" aria-label="Previous reviews">
            <img
              src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/3c7f3526c2f029c1129301e4c8f4a014cf89e418?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[75px] shrink-0"
              alt="Previous reviews"
            />
          </button>
          <button className="hover:opacity-70 transition-opacity" aria-label="Next reviews">
            <img
              src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/b6ca542913cd2c2b1af197b4f6fa465303f452f0?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[75px] shrink-0"
              alt="Next reviews"
            />
          </button>
        </div>
      </div>
      
      <div className="mb-[-26px] w-full max-w-[1528px] mt-[35px] max-md:max-w-full max-md:mb-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {reviews.map((review) => (
            <article key={review.id} className="w-[33%] max-md:w-full max-md:ml-0">
              <div className="rounded bg-card w-full text-foreground font-normal mx-auto px-6 py-[43px] max-md:max-w-full max-md:mt-5 max-md:pl-5">
                <div className="flex w-full items-stretch gap-[40px_64px] max-md:max-w-full">
                  <div className="flex items-stretch gap-2.5 text-base leading-[21px] flex-1">
                    <img
                      src={review.avatar}
                      className="aspect-[1] object-contain w-[54px] shrink-0 rounded-[50%]"
                      alt={`${review.name} avatar`}
                    />
                    <div className="bg-accent flex w-0.5 shrink-0 h-[50px]" />
                    <div className="my-auto">
                      <span className="font-semibold text-lg text-primary">
                        {review.name}
                      </span>
                      <br />
                      <span className="text-accent">
                        {review.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-stretch gap-[13px] text-[15px] leading-[1.4] flex-1 mt-[9px]">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/5eb7a3544e1fa4e0d80f6a5aedf9b571b12bd431?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-[23px] shrink-0 mt-5"
                      alt="Review icon"
                    />
                    <div className="flex flex-col items-stretch">
                      <img
                        src={review.rating}
                        className="aspect-[5.71] object-contain w-[97px]"
                        alt="Rating stars"
                      />
                      <div className="mt-[5px]">{review.date}</div>
                    </div>
                  </div>
                </div>
                <p className="text-base leading-[27px] mt-9 max-md:max-w-full max-md:mr-2.5">
                  {review.comment}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
      
      {/* <img
        src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/bd70c34833f13ed453bc0069752ab1d6dd0ba4ca?placeholderIfAbsent=true"
        className="aspect-[0.86] object-contain w-[153px] z-10 mt-[-89px] max-w-full rounded-xl"
        alt="Decorative element"
      /> */}
    </section>
  );
};

export default CustomerReviews;
