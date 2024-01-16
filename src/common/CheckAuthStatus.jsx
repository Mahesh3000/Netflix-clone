import React from 'react'
import {useSelector} from 'react-redux';

export const CheckAuthStatus = () => {
  
    const auth = useSelector((store) => store.user);
    // console.log(auth);
   return "auth";
//     return (
//     <div>checkAuthStatus</div>
//   )
}
