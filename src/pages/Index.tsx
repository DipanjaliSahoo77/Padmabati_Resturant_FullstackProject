import React from 'react';
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import SpecialOffers from '@/components/SpecialOffers';
import FoodCategories from '@/components/FoodCategories';
import CallToAction from '@/components/CallToAction';
import ContactForm from '@/components/ContactForm';
import Statistics from '@/components/Statistics';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-stretch">
      <Header />
      
      <main className="self-center flex w-full max-w-[1533px] flex-col items-stretch max-md:max-w-full">
        <HeroBanner />
        <SpecialOffers />
        <FoodCategories />
        <CallToAction />
        <ContactForm />
        <Statistics />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
