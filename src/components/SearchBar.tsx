import React, { useState } from 'react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <div className="border-2 z-10 flex w-[344px] max-w-full flex-col justify-center mt-[46px] px-7 py-[19px] rounded-[120px] border-primary max-md:mr-2.5 max-md:mt-10 max-md:px-5">
        <img
          src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/18de6081602d1a91b179cd74c7418b6fed0b3462?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[26px]"
          alt="Search icon"
        />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search from menu..."
        className="text-primary text-lg font-semibold leading-[66px] mt-[-63px] mr-[106px] max-md:mr-2.5 bg-transparent border-none outline-none pl-16"
      />
    </form>
  );
};

export default SearchBar;
