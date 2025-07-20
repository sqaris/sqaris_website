import React from 'react';

function NavBar() {
  return (
    <nav
      className="fixed top-[10px] left-1/2 -translate-x-1/2 z-[1000] 
                 flex items-center px-[40px] py-[18px] rounded-full 
                 bg-white/10 backdrop-blur-[16px] border border-white"
    >
      <div className="flex items-center gap-[48px]">
        {['Home', 'About', 'Services', 'Career', 'Contact'].map((item) => (
          <a
            key={item}
            href="#"
            className="text-white text-[15px] font-medium no-underline 
                       hover:text-white transition duration-300"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
