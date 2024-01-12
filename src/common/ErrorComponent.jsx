import React from "react";
import Header from "./Header";
import { useRouteError } from "react-router-dom";
import { NETFLIX_BODY_URL } from "../utils/constants";

const ErrorComponent = () => {
  let error = useRouteError();
  console.error(error);
  return (
    <div>
      <Header />
      {/* <div > */}

      {/* </div> */}
      <div className="absolute ">
        <img src={NETFLIX_BODY_URL} alt="NETFLIX BACKGROUND" />
        <h1 className="relative w-1/2 z-20 -mt-[40%] text-5xl text-white mx-auto   rounded-[10px] bg-[#d9232e]">
          <p className=" flex justify-center  p-4 ">
            More streaming will be available soon...
          </p>
        </h1>
      </div>
    </div>
  );
};

export default ErrorComponent;
