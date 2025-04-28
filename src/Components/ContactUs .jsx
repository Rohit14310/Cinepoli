import React from "react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen min-h-screen bg-black text-white">
      {/* Header */}
      {/* <header className="bg-gradient-to-r from-black via-gray-900 to-black py-6 shadow-lg">
        <div className=" flex flex-col  mx-auto px-4 border">
          <h1 className="text-4xl font-bold text-red-600">CineVerse</h1>
          <p className="text-lg text-gray-300">
            Your Ultimate Entertainment Hub
          </p>
        </div>
      </header> */}

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
          <h2 className="font-serif text-5xl font-bold mb-6">Contact Us</h2>
          <p className="text-xl text-gray-400 mb-12">
            We'd love to hear from you! Reach out to us for any questions,
            feedback, or support.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
          <form>
            <div className="mb-6">
              <label
                className="block text-gray-300 text-lg mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-300 text-lg mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-300 text-lg mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                rows="5"
                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
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

export default ContactUs;
