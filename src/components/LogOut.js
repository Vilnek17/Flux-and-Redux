import React from "react";
import { useDispatch, useSelector } from 'react-redux';

const LogOut = () =>{
const dispatchFunc = useDispatch();
  const isLoggedIn = useSelector((state)=> state.isLoggedIn);

  return (
    isLoggedIn && <form  >
      <button type="submit" className="logout">Log Out</button>
    </form>
  )
}
export default LogOut