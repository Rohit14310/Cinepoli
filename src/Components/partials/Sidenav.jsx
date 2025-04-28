// import React from "react";
// import { Link } from "react-router-dom";

// function Sidenav({ isOpen }) {
//   return (
//     <div
//       className="w-[20%] border-r-2 border-zinc-400 p-10 max-sm:absolute max-sm:left-[-400px]
// "
//     >
//       <h1 className="text-2xl text-white font-bold">
//         <i className="text-4xl text-[#6556CD] ri-tv-fill mr-2"></i>
//         <span className="font-serif text-4xl">
//           L<span className="font-sans">ux</span>
//         </span>
//       </h1>
//       <nav className="flex flex-col text-zinc-400 text-xl gap-3">
//         <h1 className="text-white font-semibold text-xl mt-10 mb-5">
//           New Feeds
//         </h1>
//         <Link
//           to="/trending"
//           className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"
//         >
//           <i className="text-[#FF5733] ri-fire-fill"></i> Trending
//         </Link>

//         <Link
//           to={"/popular"}
//           className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"
//         >
//           <i className="text-[#FFC300] ri-magic-fill"></i> Popular
//         </Link>
//         <Link
//           to={"/movie"}
//           className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"
//         >
//           <i className="text-[#e9f1f2] ri-movie-fill"></i> Movie
//         </Link>
//         <Link
//           to={"/tv"}
//           className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"
//         >
//           <i className="text-[#3498DB] ri-tv-2-fill"></i> Tv Shows
//         </Link>
//         <Link
//           to={"/people"}
//           className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"
//         >
//           <i className="text-[#8E44AD] ri-team-fill"></i> People
//         </Link>
//       </nav>
//       <hr className="border-none h-[1px] bg-zinc-400" />
//       <nav className="flex flex-col text-zinc-400 text-xl gap-3">
//         <h1 className="text-white font-semibold text-xl mt-10 mb-5">
//           Website Information
//         </h1>
//         <Link
//           to="aboutus"
//           className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"
//         >
//           <i className="text-[#2ECC71] ri-information-fill"></i> About Us
//         </Link>

//         <Link
//           to="contactus"
//           className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"
//         >
//           <i className="text-[#6556CD] ri-contacts-fill"></i> Contact Us
//         </Link>
//       </nav>
//     </div>
//   );
// }

// export default Sidenav;

// ====================================================

import React from "react";
import { Link } from "react-router-dom";

function Sidenav({ isOpen }) {
  return (
    <div
      className={`border-r-2 border-zinc-400 p-10 transition-all duration-500 ease-in-out 
      ${
        isOpen
          ? "max-sm:left-0 max-sm:w-[70%]"
          : "max-sm:left-[-2000px] max-sm:w-[70%]"
      } 
      w-[20%] max-sm:absolute max-sm:z-10 max-sm:bg-black max-md:w-auto md:w-auto `}
    >
      <h1 className="text-2xl text-white font-bold">
        <i className="text-4xl text-[#6556CD] ri-tv-fill mr-2"></i>
        <span className="font-serif text-4xl">
          L<span className="font-sans">ux</span>
        </span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          New Feeds
        </h1>
        <Link
          to="/trending"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"
        >
          <i className="text-[#FF5733] ri-fire-fill"></i> Trending
        </Link>

        <Link
          to={"/popular"}
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"
        >
          <i className="text-[#FFC300] ri-magic-fill"></i> Popular
        </Link>
        <Link
          to={"/movie"}
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"
        >
          <i className="text-[#e9f1f2] ri-movie-fill"></i> Movie
        </Link>
        <Link
          to={"/tv"}
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"
        >
          <i className="text-[#3498DB] ri-tv-2-fill"></i> Tv Shows
        </Link>
        <Link
          to={"/people"}
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"
        >
          <i className="text-[#8E44AD] ri-team-fill"></i> People
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400" />
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          Website Information
        </h1>
        <Link
          to="aboutus"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"
        >
          <i className="text-[#2ECC71] ri-information-fill"></i> About Us
        </Link>

        <Link
          to="contactus"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"
        >
          <i className="text-[#6556CD] ri-contacts-fill"></i> Contact Us
        </Link>
      </nav>
    </div>
  );
}

export default Sidenav;
