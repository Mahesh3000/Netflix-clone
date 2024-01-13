import React from "react";
import { SUPPORTED_LANG } from "../utils/constants";
import {useDispatch } from 'react-redux';
import { setLang } from "../utils/configSlice";

const LangSelection = () => {

    const dispatch =  useDispatch();
  const onSelectHandler = (e) =>{
    dispatch(setLang(e.target.value))
  }
  return (
    <select onChange={onSelectHandler}  className="mr-10 p-2 outline-none text-white rounded opacity-70 bg-[#d9232fde]">
      {SUPPORTED_LANG.map((language) => (
        <option className="rounded-0 bg-[#d9232fde] " key={language.identifier} value={language.identifier}>{language.name.toLocaleUpperCase()}</option>
      ))}
    </select>
  );
};

export default LangSelection;
