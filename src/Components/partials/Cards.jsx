import React from "react";
import { Link } from "react-router-dom";

function Cards({ data, title }) {
  return (
    <div className="flex flex-wrap justify-around gap-5 w-full">
      {data.map((cards, index) => (
        <Link
          to={`/${cards.media_type || title}/details/${cards.id}`}
          className="w-auto mb-[5%] mt-[30px]"
          key={index}
        >
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] max-sm:h-auto object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              cards.poster_path || cards.backdrop_path || cards.profile_path
            }`}
            alt="wallpaper"
          />
          <h1 className="text-2xl text-zinc-300 mt-3 font-semibold">
            {cards.original_title ||
              cards.title ||
              cards.name ||
              cards.original_name}
          </h1>
        </Link>
      ))}
    </div>
  );
}

export default Cards;
