import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  // 1. Add state to track scroll position
  const [isScrolled, setIsScrolled] = useState(false);

  // 2. Add scroll listener effect
  useEffect(() => {
    // Set 'isScrolled' to true if the window has scrolled past 50px
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // This function generates the full class string for any main nav link.
  const getNavLinkClasses = (path, isAuth = false) => {
    // Base classes for the Home/Menu/Catering/OrderOnline links
    const baseClasses = "flex text-lg text-black font-medium whitespace-nowrap justify-center px-[37px] py-[9px] rounded-[120px] max-md:px-5 cursor-pointer hover:opacity-90 transition-all";
    
    // Classes for the inactive state (transparent background)
    const inactiveClasses = "bg-transparent"; 
    
    // Classes for the active state (orange background)
    const activeClasses = "bg-[rgba(252,138,6,1)]";

    // If it's the Login/Signup button, return its fixed style
    if (isAuth) {
        return "bg-[rgba(3,8,31,1)] flex items-center gap-3 text-white font-medium whitespace-nowrap px-[26px] py-[17px] rounded-[120px] max-md:px-5 hover:opacity-90 transition-opacity";
    }

    // Apply the active/inactive class based on the current path
    return currentPath === path ? `${baseClasses} ${activeClasses}` : `${baseClasses} ${inactiveClasses}`;
  };

  return (
    // 3. Apply dynamic classes to the header based on 'isScrolled' state
    <header 
      className={`fixed pt-0 pb-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm py-2 shadow-md' // Slightly transparent/blurred white when scrolled
          : 'bg-white py-4 shadow-sm'                      // Solid white when at the top
      }`}
      
    >
      
      {/* (Skipping the commented-out location bar for brevity) */}
      
      <nav className="w-full max-w-[1628px] mx-auto max-md:max-w-full"> {/* Added mx-auto for centering */}
        <div className="gap-1 flex max-md:flex-col max-md:items-stretch items-center"> {/* Added items-center here for vertical alignment of logo/nav */}
          
          {/* Logo container */}
          <div className="w-[38%] max-md:w-full max-md:ml-0">
            <div className="grow max-md:max-w-full max-md:mt-[35px]">
              <div className="gap-1 flex max-md:flex-col max-md:items-stretch">
                <div className={`transition-all duration-400 ease-in-out max-md:w-full max-md:ml-0 ${
    isScrolled 
      ? 'w-[330px]' // Shrinks to 180px when scrolled
      : 'w-[70%]'  // Maintains the default large size (80% of its parent column) when at the top
  }`}>
                  <img
                    src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/fb07911661ab2aca2d9690e9d5e62578759038d3?placeholderIfAbsent=true"
                    className="aspect-[3.45] object-contain w-full grow max-md:max-w-full"
                    alt="Padmabati Food Junction Logo"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation and Login/Signup */}
          <div className="w-[62%] ml-2 max-md:w-full max-md:ml-0 mt-5">
            <div className="flex w-full items-stretch gap-[40px_40px] self-stretch text-lg flex-wrap my-auto max-md:max-w-full max-md:mt-10 items-center">
              
              <div className="text-black font-semibold grow shrink w-[520px] my-auto max-md:max-w-full flex items-center gap-4">
                {/* Navigation Links */}
                <Link
                  to="/"
                  className={getNavLinkClasses('/') + " self-center py-[9px] items-center"}
                  style={{fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif'}}
                >
                  Home
                </Link>
                <Link
                  to="/menu"
                  className={getNavLinkClasses('/menu') + " self-center py-[9px] items-center"}
                  style={{fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif'}}
                >
                  Menu
                </Link>
                <Link
                  to="/catering"
                  className={getNavLinkClasses('/catering') + " self-center py-[9px] items-center"}
                  style={{fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif'}}
                >
                  Catering
                </Link>
                <Link
                  to="/order-online"
                  className={getNavLinkClasses('/order-online') + " self-center py-[9px] items-center"}
                  style={{fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif '}}
                >
                  OrderOnline
                </Link>
              </div>
              
              <div className='mr-10'>
                {/* Login/Signup button */}
                <Link to="/auth" className={getNavLinkClasses(null, true)}>
                  <img
                    src="https://api.builder.io/api/v1/image/assets/7dc666ea54844e2e91688eeb59518919/318ea5274ba9149caa5000d86e3d7b0b60577030?placeholderIfAbsent=true"
                    className="aspect-[1.15] object-contain w-[31px] shrink-0 rounded-[1px]"
                    alt="Login icon"
                  />
                  <div className="basis-auto">Login/Signup</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;