import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO_URL } from "../utils/constants";
import LogOutURL from "../../src/logOutLogo.png";
import lang from "./languageConstants.js";

import { searchText } from "../utils/moviesSlice";
import FindingMovies from "./FindingMovies";
import LangSelection from "./LangSelection";
import { setLang } from "../utils/configSlice.js";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const appLang = useSelector((store) => store.appConfig.currentApplLang);

  const user = useSelector((store) => store.user);
  const [isVisible, setVisible] = useState(true);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(
          addUser({
            uid,
            displayName,
            email,
          })
        );
        navigate("/home");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/login");
        dispatch(setLang("en"))
      }
    });

    return () => unsubscribe();
  }, []);

  const onLogOutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className=" px-1 py-3 bg-gradient-to-b from-black z-20 w-full flex md:flex-row justify-between absolute  
                    md:px-6 md:py-2 ">
      <div className=" gap-3 flex md:gap-12">
        <img
          className="w-[7rem] md:w-[10rem] "
          src={NETFLIX_LOGO_URL}
          alt="NETFLIX LOGO"
        />
        {user && (
        <ul className="hidden md:flex gap-6 self-center ">
          {lang[appLang].home.map((list) => (
            <Link
              to={list}
              key={list}
              className={"z-20 text-lg text-white flex cursor-pointer "}
            >
              {list}
            </Link>
          ))}
        </ul>)}
      </div>
      {user && (
        <div className="flex self-center gap-40">
          <span className="hidden  md:block self-center">
            <LangSelection />
            <FindingMovies />
          </span>

          <span className="text-white cursor-pointer flex  md:relative   md:mt-0">
            <img
              src={LogOutURL}
              className="w-10 flex self-end"
              alt="LogOut"
              onClick={() => setVisible(!isVisible)}
            />

            {/* display the below only when the profile is clicked */}
            <span
              className={
                isVisible
                  ? "hidden"
                  : "text-md absolute inline-block text-nowrap right-0 -ml-12 mt-[2.60rem] p-1  bg-[#d9232e]  rounded px-3  opacity-70 "
              }
            >
              <button className=" mb-1" onClick={onLogOutHandler}>
                {" "}
                {lang[appLang].log_out}
              </button>
            </span>
          </span>
        </div>
      )}
    </div>
  );
};

export default Header;
