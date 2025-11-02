import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section className="flex flex-col relative min-h-[771px] text-white mt-[46px] pb-[186px] px-[77px] rounded-xl max-md:max-w-full max-md:mt-10 max-md:pb-[100px] max-md:px-5">
      <img
        src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/efa794b6dfef71ead05ebfbaf0dd25986218722c?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0 rounded-xl"
        alt="Delivery background"
      />
      <div className="relative bg-white flex w-[304px] shrink-0 max-w-full h-[85px] rounded-[0px_0px_12px_12px]" />
      <h2 className="relative text-[44px] font-bold ml-5 mt-[276px] max-md:max-w-full max-md:mt-10">
        Fast & Reliable Delivery.
      </h2>
      <button 
        onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
        className="relative bg-[rgba(252,138,6,1)] flex mb-[-37px] flex-col items-stretch text-4xl font-medium justify-center ml-5 mt-[69px] px-[53px] py-9 rounded-[120px] max-md:ml-2.5 max-md:mt-10 max-md:mb-2.5 max-md:px-5 hover:opacity-90 transition-opacity"
      >
        <div>Start your order</div>
      </button>
    </section>
  );
};

export default ContactForm;
