import React, { useRef, useState } from "react";
import Header from "../common/Header";
import { validate } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate} from 'react-router-dom';
import {useDispatch } from 'react-redux';
import { addUser } from "../utils/userSlice";
import { NETFLIX_BODY_URL } from "../utils/constants";

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [toggleSignIn,setToggleSignIn] = useState(true);
    const [errorMsg,setErroMsg] = useState(false);

    const toggleSignUp = () =>{
        setToggleSignIn(!toggleSignIn);
    }

    const email = useRef();
    const password = useRef();
    
    

    const onSignInHandler = (e) =>{
        e.preventDefault();

        let validationStatus = validate(email.current.value,password.current.value);
        setErroMsg(validationStatus);

        if(errorMsg) return;

        if(!toggleSignIn)
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed up 
            // const user = userCredential.user;
            // dispatch(addUser(userCredential.user))
            // ...
            dispatch(addUser({email:userCredential.user.email,uid:userCredential.user.uid,displayName:userCredential.user.displayName}))
            console.log("LoggedIn ",userCredential);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });

        else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                console.log("Success");
                dispatch(addUser({email:userCredential.user.email,uid:userCredential.user.uid,displayName:userCredential.user.displayName}))
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

        }
    }

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src={NETFLIX_BODY_URL}
          alt="NETFLIX BACKGROUND"
        />
      </div>
      <form
        action=""
        className="bg-[black]  w-4/12  absolute  right-0 left-0 mx-auto pb-16 pl-16 pr-16 pt-12   my-36 flex flex-col justify-center content-center bg-opacity-80"
      >
        <h2 className="text-3xl text-[white] font-semibold just py-4">
        {toggleSignIn ? "Sign In" : "Sign Up"}
        </h2>
        {!toggleSignIn ?
        <input
          type="text"
          placeholder="Full Name"
          className="p-4 mx-auto my-4  w-full rounded bg-[#585858] text-white text-xl  font-semibold"
        /> : ""}
        <input
          type="email"
          placeholder="Email or Phone Number"
          ref={email}
          className="p-4 mx-auto my-4  w-full rounded bg-[#585858] border-none text-xl text-white  font-semibold"
        />
        <input
          type="password"
          placeholder="Password"
          ref={password}
          className="p-4 mx-auto my-4 w-full rounded bg-[#585858] border-none text-xl text-white"
        />
        {/* <input type="password"  placeholder='Confirm Password' className='p-2 m-2 w-[300px]'/> */}
        <p className="text-red-500 font-semibold text-lg py-2 ">{errorMsg}</p>
        <button className="p-4 my-4 rounded text-white font-semibold w-full bg-red-700" onClick={onSignInHandler}>
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
