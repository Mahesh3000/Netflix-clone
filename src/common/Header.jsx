import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { NETFLIX_LOGO_URL } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({
          uid,displayName,email
        }))

        navigate("/browse");
      } else {
        // User is signed out
        // ...
        navigate("/login");
      }

    });

    return ()=> unsubscribe();
  }, []);

  const onLogOutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("LogOut Successful");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="w-full z-10 absolute py-4 px-8 bg-gradient-to-b from-black flex justify-between ">
      <div>
        <img
          className=" w-[12rem]"
          src={NETFLIX_LOGO_URL}
          alt="NETFLIX LOGO"
        />
      </div>
      <div>
        <span className="text-white cursor-pointer" onClick={onLogOutHandler}>
          {user?.email}
          LogOut
        </span>
      </div>
    </div>
  );
};

export default Header;
