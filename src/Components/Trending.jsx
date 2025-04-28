import React, { useEffect, useState } from "react";
import Topnav from "./partials/Topnav";
import DropDown from "./partials/DropDown";
import { useNavigate } from "react-router-dom";
import axios from "../utils/Axios";
import Loading from "../Components/Loading";
import Cards from "./partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

function Trending() {
  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);

  document.title = "MovieApp | Trending" + category.toUpperCase();

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );
      if (data.results.length > 0) {
        settrending((prev) => [...prev, ...data.results]);
        setpage((prev) => prev + 1);
      } else {
        sethasmore(false);
      }
    } catch (err) {
      console.log("Error is ", err);
    }
  };

  const refreshHandler = () => {
    if (trending.length === 0) {
      GetTrending();
    } else {
      setpage(1);
      settrending([]);
      GetTrending();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 w-full min-h-screen">
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
        <h1 className="text-xl sm:text-2xl font-semibold text-zinc-400 w-full sm:w-auto">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line p-2 sm:p-3 cursor-pointer"
          ></i>
          Trending
          <small className="ml-1 text-xs sm:text-sm text-zinc-500">
            ({category.toUpperCase()})
          </small>
        </h1>
        <div className="flex flex-col sm:flex-row items-center w-full sm:w-[80%] gap-3 sm:gap-4">
          <Topnav />
          <div className="flex flex-row w-full sm:w-auto gap-2  sm:gap-4">
            <DropDown
              title="Category"
              options={["movie", "tv", "all"]}
              func={(e) => setcategory(e.target.value)}
            />
            <DropDown
              title="Duration"
              options={["week", "day"]}
              func={(e) => setduration(e.target.value)}
            />
          </div>
        </div>
      </div>
      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrending}
        hasMore={hasmore}
        loader={
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#6556CD]"></div>
          </div>
        }
      >
        <div className="w-full pb-8">
          <Cards data={trending} title="tv" />
        </div>
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Trending;
