import React from "react";
import loader from "../../public/loader.gif";
function Loading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <div>
        <img className="h-[50%] object-cover" src={loader} alt="loader" />
      </div>
    </div>
  );
}

export default Loading;
