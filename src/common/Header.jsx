import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO_URL } from "../utils/constants";
import LogOutURL from "../../src/logOutLogo.png";
import { useLocation } from 'react-router-dom';
import { searchText } from "../utils/moviesSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const [isVisible, setVisible] = useState(true);
  const [search, setSearch] = useState("");

  
  const navList = [
    "Home",
    "TV Shows",
    // "Movies",
    // "New & Popular",
    // "Browse by Languages",
  ];

  const onSearchHandler = (e) =>{
    
    setSearch(e);
    dispatch(searchText(e))
  }

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
    <div className=" px-6 py-2 bg-gradient-to-b from-black z-20 w-full flex flex-col md:flex-row justify-between absolute  ">

      <div className="flex gap-12">
        <img
          className="w-[10rem] max-lg:w-[12rem]"
          src={NETFLIX_LOGO_URL}
          alt="NETFLIX LOGO"
        />
        <ul className="flex gap-6 self-center">
          {navList.map((list) => (
            <Link to={list} key={list} className={"z-20 text-lg text-white flex cursor-pointer "}>{list}</Link>
          ))}
        </ul>
      </div>
      {user && (
        <div className="flex self-center gap-40">
          <span className="self-center">
            
            <input
              type="text"
              value={search}
              onInput={(e) => onSearchHandler(e.target.value)}
              className="w-60 h-9 px-2 rounded border-none font-semibold text-xl focus:outline-none"
              placeholder="Search a movie"
            />
          </span>

          <span className="text-white cursor-pointer flex">

            <img
              src={LogOutURL}
              className="w-10"
              alt="LogOut"
              onClick={() => setVisible(!isVisible)}
            />

            {/* display the below only when the profile is clicked */}
            <span
              className={
                isVisible
                  ? "hidden"
                  : "text-md  absolute -ml-9 mt-[2.60rem] p-1  bg-[#d9232e]  rounded px-3  opacity-70 "
              }
            >
              <button className="py-1 space-x -3 flex ">
                {/* <p> LoggedIn: </p> */}
                {/* <p className="uppercase">{user?.email}</p> */}
              </button>
              <button className="mb-1" onClick={onLogOutHandler}>
                {" "}
                LogOut
              </button>
            </span>
          </span>
        </div>
      )}
    </div>
  );
};

export default Header;
