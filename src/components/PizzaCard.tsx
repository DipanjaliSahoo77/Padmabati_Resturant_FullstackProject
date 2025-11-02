import React, { useState } from 'react';

interface PizzaCardProps {
  name: string;
  description: string;
  image: string;
  rating: string;
  sizes: {
    name: string;
    price: string;
    selected?: boolean;
  }[];
}

const PizzaCard: React.FC<PizzaCardProps> = ({ name, description, image, rating, sizes }) => {
  const [selectedSize, setSelectedSize] = useState(sizes.find(s => s.selected)?.name || sizes[0].name);

  return (
    <article className="bg-card shadow-[5px_5px_34px_rgba(0,0,0,0.25)] border pt-7 pb-[18px] px-[26px] rounded-lg border-border max-md:max-w-full max-md:pr-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[55%] max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col mt-4 max-md:mt-10">
            <h3 className="text-foreground text-2xl font-semibold">{name}</h3>
            <img
              src={rating}
              className="aspect-[3.66] object-contain w-[99px]"
              alt="Rating stars"
            />
            <div className="self-stretch flex w-full flex-col text-sm font-bold leading-[25px] mt-7 pl-[7px]">
              <p className="text-foreground font-normal">{description}</p>
              <div className="self-stretch flex w-full items-stretch gap-[5px] whitespace-nowrap mt-[54px] max-md:mt-10">
                {sizes.slice(0, 2).map((size) => (
                  <button
                    key={size.name}
                    onClick={() => setSelectedSize(size.name)}
                    className={`rounded border-2 flex items-stretch gap-[21px] flex-1 pl-[21px] pr-2 py-2.5 transition-colors ${
                      selectedSize === size.name
                        ? 'bg-primary text-primary-foreground border-muted'
                        : 'border-primary text-foreground'
                    } max-md:pl-5`}
                  >
                    <div className="my-auto">{size.name}</div>
                    <div className="rounded bg-destructive flex flex-col items-stretch text-destructive-foreground justify-center px-[23px] py-[7px] max-md:px-5">
                      <div>{size.price}</div>
                    </div>
                  </button>
                ))}
              </div>
              {sizes[2] && (
                <button
                  onClick={() => setSelectedSize(sizes[2].name)}
                  className={`rounded border-2 flex items-stretch gap-[9px] mt-[19px] px-[15px] py-2.5 transition-colors ${
                    selectedSize === sizes[2].name
                      ? 'bg-primary text-primary-foreground'
                      : 'border-primary text-foreground'
                  }`}
                >
                  <div className="grow my-auto">{sizes[2].name}</div>
                  <div className="rounded bg-destructive flex flex-col items-stretch text-destructive-foreground whitespace-nowrap justify-center px-[23px] py-[7px] max-md:pl-5">
                    <div>{sizes[2].price}</div>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="w-[45%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col text-sm font-bold whitespace-nowrap leading-[25px] max-md:mt-[34px]">
            <img
              src={image}
              className="aspect-[1] object-contain w-[191px] max-w-full rounded-[120px]"
              alt={name}
            />
            {sizes[3] && (
              <button
                onClick={() => setSelectedSize(sizes[3].name)}
                className={`rounded border-2 flex items-stretch gap-6 mt-[31px] px-[11px] py-2.5 transition-colors ${
                  selectedSize === sizes[3].name
                    ? 'bg-primary text-primary-foreground'
                    : 'border-primary text-foreground'
                }`}
              >
                <div className="my-auto">{sizes[3].name}</div>
                <div className="rounded bg-destructive flex flex-col items-stretch text-destructive-foreground justify-center px-[23px] py-[7px] max-md:pl-5">
                  <div>{sizes[3].price}</div>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PizzaCard;
