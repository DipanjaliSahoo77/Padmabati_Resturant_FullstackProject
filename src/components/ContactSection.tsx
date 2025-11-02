import React, { useState } from 'react';

const ContactSection = () => {
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
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact-form" className="bg-[rgba(217,217,217,1)] mt-[66px] pt-[68px] pb-[164px] px-20 rounded-xl max-md:max-w-full max-md:mt-10 max-md:pb-[100px] max-md:px-5">
      <div className="mb-[-33px] max-md:max-w-full max-md:mb-2.5">
        <div className="flex w-[1006px] max-w-full items-stretch gap-5 text-black flex-wrap justify-between">
          <h2 className="text-[32px] font-bold">
            Know more about us!
          </h2>
          <div className="flex items-stretch text-xl font-normal">
            <div className="mr-[-198px] grow shrink basis-auto my-auto">
              Who we are? <span style={{fontWeight: 700}}>Help & Support</span>
            </div>
            <div className="border flex w-[219px] shrink-0 h-[76px] rounded-[120px] border-[rgba(252,138,6,1)] border-solid" />
          </div>
        </div>
        <div className="bg-[rgba(3,8,31,1)] mt-12 pr-20 rounded-xl max-md:max-w-full max-md:mt-10 max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[56%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col relative min-h-[641px] mt-[-86px] pt-[86px] pb-[29px] px-20 max-md:max-w-full max-md:px-5">
                <img
                  src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/3a4ac104b03ccbcb2d034c042bcf63fc8af73ae5?placeholderIfAbsent=true"
                  className="absolute h-full w-full object-cover inset-0 rounded-xl"
                  alt="Contact background"
                />
                <div className="relative bg-[rgba(255,255,255,0.1)] flex w-px shrink-0 h-[526px]" />
              </div>
            </div>
            <div className="w-[44%] ml-5 max-md:w-full max-md:ml-0">
              <form onSubmit={handleSubmit} className="bg-[rgba(252,138,6,1)] flex flex-col self-stretch text-lg text-white font-bold w-full my-auto pt-5 pb-[77px] px-[66px] rounded-[43px] max-md:max-w-full max-md:mt-10 max-md:px-5">
                <label htmlFor="name" className="mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-white flex w-[249px] shrink-0 h-[50px] mt-1 px-3 text-black font-normal rounded"
                />
                
                <label htmlFor="phone" className="mt-[17px] mb-3.5">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="bg-white flex w-[249px] shrink-0 h-[50px] px-3 text-black font-normal rounded"
                />
                
                <label htmlFor="message" className="mt-2.5 mb-[21px]">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="bg-white flex w-[249px] shrink-0 h-[50px] px-3 py-2 text-black font-normal rounded resize-none"
                />
                
                <button
                  type="submit"
                  className="bg-[rgba(3,8,31,1)] text-white font-bold py-3 px-6 rounded-[120px] mt-6 w-[249px] hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
