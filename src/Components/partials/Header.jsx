import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-auto flex flex-col justify-end p-[6.5%] items-start"
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="w-auto text-5xl font-black text-white mb-2"
      >
        {data.original_title || data.title || data.name || data.original_name}
      </motion.h1>

      {/* Overview */}
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="w-[70%] max-lg:w-[100%] mb-3 mt-3 text-white text-lg"
      >
        {data.overview.slice(0, 260)}...
        <Link
          to={`/${data.media_type}/details/${data.id}`}
          className="text-blue-400 hover:text-blue-300 transition duration-300"
        >
          more
        </Link>
      </motion.p>

      {/* Metadata */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="flex items-center text-white space-x-5"
      >
        <p>
          <i className="text-yellow-500 ri-megaphone-fill"></i>{" "}
          {data.release_date || "No information"}
        </p>
        <p>
          <i className="text-yellow-500 ri-album-line"></i>{" "}
          {data.media_type.toUpperCase()}
        </p>
      </motion.div>

      {/* Watch Trailer Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <Link
          to={`/${data.media_type}/details/${data.id}/trailer`}
          className="bg-[#6556CD] p-4 rounded text-white mt-4 inline-block hover:bg-[#7c6ce6] transition duration-300"
        >
          Watch Trailer
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default Header;
