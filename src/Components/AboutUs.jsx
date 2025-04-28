import React, { useEffect, useState } from "react";
import instance from "../utils/Axios"; // Adjust the import path
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const [movieCount, setMovieCount] = useState(0);
  const [tvShowCount, setTvShowCount] = useState(0);

  useEffect(() => {
    // Fetch total number of movies
    instance
      .get("/discover/movie")
      .then((response) => {
        setMovieCount(response.data.total_results);
      })
      .catch((error) => {
        console.error("Error fetching movie count:", error);
      });

    // Fetch total number of TV shows
    instance
      .get("/discover/tv")
      .then((response) => {
        setTvShowCount(response.data.total_results);
      })
      .catch((error) => {
        console.error("Error fetching TV show count:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white w-full">
      {/* Header */}
      <header className="bg-gradient-to-r from-black via-gray-900 to-black py-6 shadow-lg">
        <div className="container flex items-center mx-auto px-4">
          <i
            onClick={() => navigate(-1)}
            className="text-2xl hover:text-[#6556CD] ri-arrow-left-line p-3"
          ></i>
          <div className="flex flex-col items-center mx-auto px-4">
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-red-600 transition duration-300 hover:scale-110">
              CineVerse
            </h1>
            <p className="text-base md:text-xl text-gray-300">
              Your Ultimate Entertainment Hub
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 hover:text-red-600 transition duration-300">
            About Us
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-12">
            Your Gateway to Endless Entertainment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-6">
              Our Mission
            </h3>
            <p className="text-base md:text-lg text-gray-300 mb-6">
              At <strong className="font-semibold">CineVerse</strong>, we aim to
              bring the magic of storytelling to your fingertips. With a vast
              library of movies, TV shows, and web series, we ensure you never
              run out of options.
            </p>
            <p className="text-base md:text-lg text-gray-300">
              From action-packed adventures to heartwarming dramas, we curate
              the best content to suit every mood.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-2xl ">
            <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-6">
              Why Choose Us?
            </h3>
            <ul className="list-disc list-inside text-base md:text-lg text-gray-300">
              <li className="mb-3 hover:text-red-600 transition duration-300">
                500,000+ Movies and TV Shows
              </li>
              <li className="mb-3 hover:text-red-600 transition duration-300">
                Seamless Streaming Experience
              </li>
              <li className="mb-3 hover:text-red-600 transition duration-300">
                Personalized Recommendations
              </li>
              <li className="mb-3 hover:text-red-600 transition duration-300">
                Available on All Devices
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 text-center">
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Our Library
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-red-600 p-2 sm:p-2 md:p-4 lg:p-5 rounded-lg shadow-lg hover:bg-white hover:text-red-600 hover:scale-110 transition duration-300">
              <h4 className="text-3xl md:text-4xl lg:text-4xl font-bold">
                {movieCount}+
              </h4>
              <p className="text-base md:text-lg">Movies</p>
            </div>
            <div className="text-3xl md:text-4xl lg:text-4xl font-bold">+</div>
            <div className="bg-red-600 p-2 sm:p-2 md:p-4 lg:p-5 rounded-lg shadow-lg hover:bg-white hover:text-red-600 hover:scale-110 transition duration-300">
              <h4 className="text-3xl md:text-4xl lg:text-4xl font-bold">
                {tvShowCount}+
              </h4>
              <p className="text-base md:text-lg">TV Shows</p>
            </div>
            <div className="text-3xl md:text-4xl lg:text-4xl font-bold">=</div>
            <div className="bg-red-600 p-2 sm:p-2 md:p-4 lg:p-5 rounded-lg shadow-lg hover:bg-white hover:text-red-600 hover:scale-110 transition duration-300">
              <h4 className="text-3xl md:text-4xl lg:text-4xl font-bold">
                {movieCount + tvShowCount}
              </h4>
              <p className="text-base md:text-lg">Movies + TV Shows</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; 2025 <strong className="font-semibold">CineVerse</strong>.
            All Rights Reserved.
          </p>
          <p className="text-gray-400 mt-2">
            Made with ❤️ by the CineVerse Team
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
