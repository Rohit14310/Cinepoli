import React, { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import Header from "./partials/Header";
import axios from "../utils/Axios";
import HorizontalCards from "./partials/HorizontalCards";
import Loading from "./Loading";
import DropDown from "./partials/DropDown";

function Home() {
  document.title = "MovieApp | HomePage";

  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all");
  const [people, setpeople] = useState([]);

  // const [isOpen, setIsOpen] = useState(false);

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomdata);
    } catch (err) {
      console.log("error is ", err);
    }
  };

  useEffect(() => {
    !wallpaper && GetHeaderWallpaper();
  }, []);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      settrending(data.results);
    } catch (err) {
      console.log("error is ", err);
    }
  };

  const GetPeople = async () => {
    try {
      const { data } = await axios.get(`/person/popular`);
      setpeople(data.results);
    } catch (err) {
      console.log("error fetching people is ", err);
    }
  };

  useEffect(() => {
    GetTrending();
    GetPeople();
    !wallpaper && GetHeaderWallpaper();
  }, [category]);

  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] max-sm:w-auto 2xl:w-[100%] h-full overflow-auto overflow-x-hidden border">
        <Topnav />
        <Header data={wallpaper} />
        <div className=" flex justify-between max-sm:flex-col max-sm:gap-3 p-4 max-sm:p-5">
          <h1 className="text-4xl max-sm:text-3xl font-bold text-white">
            🔥 Trending Now
          </h1>
          {/* <br /> */}
          <DropDown
            title="Filter"
            options={["tv", "movie", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
        <HorizontalCards data={trending} />
        <div className="flex justify-between p-4 pb-0 pt-8">
          <h1 className="text-3xl font-bold text-white">🌟 Popular People</h1>
        </div>
        <HorizontalCards data={people} isPeople={true} />
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
