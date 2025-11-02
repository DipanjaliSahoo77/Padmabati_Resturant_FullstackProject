import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const OrderOnline = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-stretch min-h-screen">
      <Header />
      
      <main className="self-center flex w-full max-w-[1533px] flex-col items-stretch px-5 py-20">
        <h1 className="text-black text-5xl font-bold mb-8">Order Online</h1>
        <p className="text-gray-600 text-lg">Place your order for delivery or pickup.</p>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrderOnline;