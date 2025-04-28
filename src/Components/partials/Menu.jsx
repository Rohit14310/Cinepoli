import React from "react";

const Menu = ({ setIsOpen }) => {
  return (
    <div
      className="fixed top-2 right-0 pr-5 cursor-pointer sm:hidden z-20"
      onClick={() => setIsOpen((prev) => !prev)} // {/* <-- toggle */}
    >
      <i className="ri-menu-2-line text-4xl text-white"></i>
    </div>
  );
};

export default Menu;
