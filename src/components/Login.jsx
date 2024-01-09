import React, { useState } from "react";
import Header from "../common/Header";

const Login = () => {

    const [toggleSignIn,setToggleSignIn] = useState(true);


    const toggleSignUp = () =>{
        setToggleSignIn(!toggleSignIn);
    }

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b8dd5151-d491-4e91-b1fb-a19df70df5fc/d46403c9-f9cb-4151-b179-70cec1ccdba6/US-en-20240102-trifectadaily-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <form
        action=""
        className="bg-[black]  w-3/12  absolute  right-0 left-0 mx-auto pb-16 pl-16 pr-16 pt-12   my-36 flex flex-col justify-center content-center bg-opacity-80"
      >
        <h2 className="text-3xl text-[white] font-semibold just py-4">
        {toggleSignIn ? "Sign In" : "Sign Up"}
        </h2>
        {!toggleSignIn ?
        <input
          type="text"
          placeholder="Full Name"
          className="p-4 mx-auto my-4  w-full rounded bg-[#585858]"
        /> : ""}
        <input
          type="email"
          placeholder="Email or Phone Number"
          className="p-4 mx-auto my-4  w-full rounded bg-[#585858]"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 mx-auto my-4 w-full rounded bg-[#585858]"
        />
        {/* <input type="password"  placeholder='Confirm Password' className='p-2 m-2 w-[300px]'/> */}
        <button className="p-4 my-4 rounded text-white font-semibold w-full bg-red-700">
          {toggleSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="text-[#959595] flex justify-between ">
          <div className="flex gap-1">
            <input type="checkbox" className="bg-gray-100 " /> Remember me
          </div>
          <button>Need help?</button>
        </div>
        <div className=" mt-12 mb-8  justify-between text-white">
          <span className="text-[#959595]">{toggleSignIn ? "New to Netflix?" : "Already registered?"} </span>
          <span className="cursor-pointer" onClick={toggleSignUp}>{toggleSignIn ? "Sign up now." : "Sign In"}</span>
        </div>
      </form>
    </div>
  );
};

export default Login;
