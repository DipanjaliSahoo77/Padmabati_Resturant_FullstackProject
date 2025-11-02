import React, { useState } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
  details?: string;
}

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: '12" Vegitarian Pizza',
      price: '£27.90',
      quantity: 1,
      details: 'No Mushrooms + greenpeppers'
    },
    {
      id: '2',
      name: '17" Tandoori Pizza',
      price: '£17.90',
      quantity: 1,
      details: 'No Mushrooms + greenpeppers'
    },
    {
      id: '3',
      name: 'Coke Coca Cola',
      price: '£4.90',
      quantity: 2
    },
    {
      id: '4',
      name: '12" Vegitarian Pizza',
      price: '£27.90',
      quantity: 1,
      details: 'No Mushrooms + greenpeppers'
    }
  ]);

  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'collection'>('delivery');

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = 127.90;
  const discount = -3.00;
  const deliveryFee = 2.50;
  const total = subtotal + discount + deliveryFee;

  return (
    <aside className="bg-secondary border flex w-full flex-col items-stretch mx-auto pb-7 rounded-xl border-border max-md:mt-[23px]">
      <header className="bg-destructive border flex w-full flex-col items-stretch text-[32px] text-destructive-foreground font-semibold pt-[35px] px-0.5 rounded-[8px_8px_0px_0px] border-border">
        <div className="self-center flex w-[251px] max-w-full items-stretch gap-[30px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/c250ad2686d20e9ba16069bc667a2f675e8ae62e?placeholderIfAbsent=true"
            className="aspect-[1.07] object-contain w-[58px] shrink-0"
            alt="Basket icon"
          />
          <div className="grow shrink w-[151px]">My Basket</div>
        </div>
        <div className="border shrink-0 h-px mt-[19px] border-destructive-foreground" />
      </header>

      <div className="flex flex-col">
        {cartItems.map((item, index) => (
          <div key={`${item.id}-${index}`}>
            <div className="flex items-center gap-5 justify-between ml-[21px] mr-[22px] mt-[23px] max-md:mx-2.5">
              <div className="bg-accent self-stretch text-2xl text-accent-foreground font-bold whitespace-nowrap my-auto pt-1 pb-[19px] px-3 rounded-[50%]">
                <div>{item.quantity}x</div>
              </div>
              <div className="self-stretch flex flex-col font-semibold">
                <div className="text-[hsl(142,76%,36%)] text-xl leading-none">
                  {item.price}
                </div>
                <div className="text-primary text-base mt-[13px]">
                  {item.name}
                </div>
                {item.details && (
                  <div className="text-foreground text-[15px] font-normal leading-[18px] self-stretch mt-[11px]">
                    {item.details}
                  </div>
                )}
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="hover:opacity-70 transition-opacity"
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/ee2863dc79f83fec9a865d76165660bb3999e230?placeholderIfAbsent=true"
                  className="aspect-[1.06] object-contain w-[35px] self-stretch shrink-0 my-auto"
                  alt="Remove item"
                />
              </button>
            </div>
            <div className="border w-[366px] shrink-0 max-w-full h-px mt-[22px] border-border" />
          </div>
        ))}
      </div>

      <div className="self-center flex w-[315px] max-w-full items-stretch gap-5 justify-between mt-8">
        <div className="flex flex-col text-xl text-primary font-semibold">
          <div>Sub Total:</div>
          <div className="mt-[31px]">Discounts:</div>
          <div className="self-stretch mt-[27px]">Delivery Fee:</div>
        </div>
        <div className="text-2xl text-foreground font-normal whitespace-nowrap leading-none mt-[5px]">
          <div>£{subtotal.toFixed(2)}</div>
          <div className="flex flex-col mt-[29px] pl-4">
            <div>{discount.toFixed(2)}</div>
            <div className="ml-3.5 mt-[23px] max-md:ml-2.5">
              {deliveryFee.toFixed(2)}
            </div>
          </div>
        </div>
      </div>

      <div className="border w-[366px] shrink-0 max-w-full h-px mt-9 border-border" />

      <div className="w-full text-primary-foreground mt-8 px-[7px]">
        <div className="bg-accent/80 border flex items-stretch gap-[40px_41px] font-semibold px-[31px] py-[18px] rounded-lg border-border max-md:ml-1.5 max-md:px-5">
          <div className="text-xl grow shrink w-24">Total to pay</div>
          <div className="text-4xl leading-none grow shrink w-[95px]">
            £{total.toFixed(2)}
          </div>
        </div>

        <div className="flex w-[314px] max-w-full gap-5 text-foreground justify-between mt-24 max-md:mt-10">
          <button
            onClick={() => setDeliveryMethod('delivery')}
            className={`flex flex-col items-center pt-[13px] pb-6 px-[31px] rounded-xl border transition-colors max-md:px-5 ${
              deliveryMethod === 'delivery'
                ? 'bg-muted border-border'
                : 'bg-background border-border'
            }`}
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/ebe17a764ac69aed13ed1c8f5f0e8c123191be7d?placeholderIfAbsent=true"
              className="aspect-[1.09] object-contain w-[35px]"
              alt="Delivery icon"
            />
            <div className="text-base font-semibold leading-loose mt-2">
              Delivery
            </div>
            <div className="text-[15px] font-normal leading-loose">
              Starts at 17:50
            </div>
          </button>

          <div className="border w-px shrink-0 h-24 border-border" />

          <button
            onClick={() => setDeliveryMethod('collection')}
            className={`flex flex-col items-center pt-[13px] pb-6 px-[31px] rounded-xl border transition-colors max-md:px-5 ${
              deliveryMethod === 'collection'
                ? 'bg-muted border-border'
                : 'bg-background border-border'
            }`}
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/221e5c69b21e4502b9b3c17bdc27b172cf880ee7?placeholderIfAbsent=true"
              className="aspect-[1.09] object-contain w-[35px]"
              alt="Collection icon"
            />
            <div className="text-base font-semibold leading-loose mt-[9px]">
              Collection
            </div>
            <div className="text-[15px] font-normal leading-loose self-stretch mt-[9px]">
              Starts at 16:50
            </div>
          </button>
        </div>

        <button className="bg-destructive border flex flex-col items-center text-2xl font-semibold whitespace-nowrap mt-[34px] pt-[17px] pb-[30px] px-[70px] rounded-lg border-border max-md:mr-1.5 max-md:px-5 hover:opacity-90 transition-opacity w-full">
          <div>Checkout!</div>
        </button>

        <img
          src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/7dbbbf23b7833fa989f32fc701091488eac9c426?placeholderIfAbsent=true"
          className="aspect-[1.09] object-contain w-[35px] ml-[26px] mt-3.5 max-md:ml-2.5"
          alt="Security icon"
        />
      </div>
    </aside>
  );
};

export default ShoppingCart;
