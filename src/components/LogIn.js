import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN } from '../store';


const LogIn = () => {
  const dispatchFunc = useDispatch();
  const isLoggedIn = useSelector((state)=> state.isLoggedIn);
  const submit = (e) => {
    e.preventDefault();
    dispatchFunc({type: LOG_IN})
  }
  return (
    !isLoggedIn && <form onSubmit={submit} >
      <label htmlFor="email">Email</label>
      <input id="email" name="email"/>
      <button type="submit">Log in</button>
    </form>
  )
}

export default LogIn