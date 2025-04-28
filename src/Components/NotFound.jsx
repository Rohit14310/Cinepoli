import React from "react";
import notfound from "/notfound.gif";

function NotFound() {
  return (
    <div className="absolute top-[0] w-screen h-screen flex justify-center items-center bg-black left-0">
      <img className="h-[50%] object-cover" src={notfound} alt="" />
    </div>
  );
}

export default NotFound;
