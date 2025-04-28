import React, { useEffect, useState } from "react";
import Topnav from "./partials/Topnav";
import DropDown from "./partials/DropDown";
import { useNavigate } from "react-router-dom";
import axios from "../utils/Axios";
import Loading from "../Components/Loading";
import Cards from "./partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

function Movie() {
  const navigate = useNavigate();
  const [category, setcategory] = useState("now_playing");
  const [Movie, setMovie] = useState([]);
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);

  document.title = "MovieApp | Movie" + category.toUpperCase();

  const GetMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setMovie((prev) => [...prev, ...data.results]);
        setpage((prev) => prev + 1);
      } else {
        sethasmore(false);
      }
    } catch (err) {
      console.log("Error is ", err);
    }
  };

  const refreshHandler = () => {
    if (Movie.length === 0) {
      GetMovie();
    } else {
      setpage(1);
      setMovie([]);
      GetMovie();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return Movie.length > 0 ? (
    <div className="px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 w-full min-h-screen">
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
        <h1 className="text-xl sm:text-2xl font-semibold text-zinc-400 w-full sm:w-auto">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line p-2 sm:p-3 cursor-pointer"
          ></i>
          Movie{" "}
          <small className="ml-1 text-xs sm:text-sm text-zinc-500">
            ({category.toUpperCase()})
          </small>
        </h1>
        <div className="flex flex-col sm:flex-row items-center w-full sm:w-[80%] gap-3 sm:gap-4">
          <Topnav />
          <div className="flex flex-row w-full sm:w-auto gap-2 sm:gap-4">
            <DropDown
              title="Category"
              options={["popular", "top_rated", "upcoming"]}
              func={(e) => setcategory(e.target.value)}
            />
          </div>
        </div>
      </div>
      <InfiniteScroll
        dataLength={Movie.length}
        next={GetMovie}
        hasMore={hasmore}
        loader={
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#6556CD]"></div>
          </div>
        }
      >
        <div className="w-full pb-8">
          <Cards data={Movie} title="movie" />
        </div>
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Movie;
