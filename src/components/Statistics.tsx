import React from 'react';

const Statistics = () => {
  const stats = [
    { number: '546+', label: 'Reviews' },
    { number: '789,900+', label: 'Orders Delivered' },
    { number: '690+', label: 'Happy Customers' },
    { number: '17,457+', label: 'Food items' }
  ];

  return (
    <section className="bg-[rgba(252,138,6,1)] flex w-full gap-[40px_47px] text-2xl text-white font-bold text-center leading-[38px] mt-[120px] px-20 py-[27px] rounded-xl max-md:mr-[5px] max-md:mt-10 max-md:px-5">
      {stats.map((stat, index) => (
        <React.Fragment key={index}>
          <div className="mt-[15px]">
            <span style={{fontWeight: 300, fontSize: '64px'}}>{stat.number}</span>
            <br />
            {stat.label}
          </div>
          {index < stats.length - 1 && (
            <div className="bg-[rgba(217,217,217,1)] flex w-px shrink-0 h-[100px]" />
          )}
        </React.Fragment>
      ))}
    </section>
  );
};

export default Statistics;
