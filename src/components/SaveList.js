import React from 'react';
import LogIn from './LogIn';
import { useDispatch, useSelector } from 'react-redux';
import { SAVE_LIST, CLEAR_LIST, CLEAR_VALUES } from '../store';



const SaveList = () => {
  const dispatchFunc = useDispatch();
  const isLoggedIn = useSelector((state)=> state.isLoggedIn);
  const coffee = useSelector((state) => state.coffee);
  const sugar = useSelector((state) => state.sugar);
  const list = useSelector((state) => state.list);

  const handleSave = () => {
    const newList = [...list, { coffee, sugar }];
    localStorage.setItem(SAVE_LIST, JSON.stringify(newList));
    dispatchFunc({type:SAVE_LIST});
  };

  const handleClear = () => {
    localStorage.removeItem(SAVE_LIST);
    dispatchFunc({type: CLEAR_LIST});
    dispatchFunc({ type: CLEAR_VALUES });
  };


  return (
    <div className='save'>
          <p>You must be logged in to save the list.</p> 
        {isLoggedIn && <button onClick={handleSave}>SAVE</button>}
         {isLoggedIn && <button onClick={handleClear}>CLEAR</button>}
      </div>
  )
}

export default SaveList