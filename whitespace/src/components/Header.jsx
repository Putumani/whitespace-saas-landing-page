import React from "react";

const Header = () => {
  return (
    <header className="h-[92px] px-[220px] py-[16px] flex justify-between items-center">
      {/* Logo Container */}
      <div className="h-[34px] w-[191px] flex items-center">
        <img src="logo_navy_blue.svg" alt="Logo" className="h-full" />
      </div>

      {/* Navigation Container */}
      <div className="h-[60px] w-[988.5px] flex justify-between items-center">
        {/* Navigation Links */}
        <nav className="h-[24px] w-[551.5px] flex items-center space-x-8">
          {["Products", "Solutions", "Resources", "Prices"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Button Container */}
        <div className="h-[60px] w-[377px] flex items-center justify-between">
          <button className="h-full w-[126px] bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-md">
            Login
          </button>
          <button className="h-full w-[227px] bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md">
            Try Whitespace Free
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
