import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Loading from "./Components/Loading";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movie from "./Components/Movie";
import Tvshows from "./Components/Tvshows";
import People from "./Components/People";
import MovieDetails from "./Components/MovieDetails";
import TvDetails from "./Components/TvDetails";
import PersonDetails from "./Components/PersonDetails";
import Trailer from "./Components/partials/Trailer";
import NotFound from "./Components/NotFound";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs ";
import Menu from "./Components/partials/Menu";
import { useState } from "react";
import Sidenav from "./Components/partials/Sidenav";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="bg-[#1f1e24] w-full  h-auto  flex">
        <Menu setIsOpen={setIsOpen} />
        {isOpen ? <Sidenav isOpen={isOpen} /> : <></>}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/trending" element={<Trending />}></Route>
          <Route path="/popular" element={<Popular />}></Route>
          <Route path="/movie" element={<Movie />}></Route>
          <Route path="/movie/details/:id" element={<MovieDetails />}>
            <Route path="/movie/details/:id/trailer" element={<Trailer />} />
          </Route>
          <Route path="/tv" element={<Tvshows />}></Route>
          <Route path="/tv/details/:id" element={<TvDetails />}>
            <Route path="/tv/details/:id/trailer" element={<Trailer />} />
          </Route>
          <Route path="/people" element={<People />}></Route>
          <Route path="/people/details/:id" element={<PersonDetails />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
