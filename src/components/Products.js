import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DECREMENT_COFFE, DECREMENT_SUGAR, INCREASE, INCREMENT_COFFE, INCREMENT_SUGAR, INCREASE_COFFE,INCREASE_SUGAR } from '../store';

const Products = () => {

  const coffee = useSelector((store) => store.coffee)
  const sugar = useSelector((store) => store.sugar)
  const isLoggedIn = useSelector((store) => store.isLoggedIn)

  const dispatchFunc = useDispatch();

  const incrementCoffee = () => {
    dispatchFunc({ type: INCREMENT_COFFE })
  }
  const incrementSugar = () => {
    dispatchFunc({ type: INCREMENT_SUGAR })
  }

  const decrementCoffee = () => {
    dispatchFunc({ type: DECREMENT_COFFE })
  }
 
  const decrementSugar = () => {
    dispatchFunc({ type: DECREMENT_SUGAR })
  }


  const increaseCoffe = () => {
    dispatchFunc({ type: INCREASE_COFFE, number: 10 })
  }

  const increaseSugar = () => {
    dispatchFunc({ type: INCREASE_SUGAR, number: 10 })
  }

  return (
    <>
      <div className='product'>
        <span>{`Coffe: ${coffee}`}</span>
        <button onClick={incrementCoffee}>+</button>
        <button onClick={decrementCoffee}>-</button>
        {isLoggedIn && <button onClick={increaseCoffe}>+10</button>}
      </div>
      <div className='product'>
        <span>{`Sugar:${sugar}`}</span>
        <button onClick={incrementSugar}>+</button>
        <button onClick={decrementSugar}>-</button>
        {isLoggedIn && <button onClick={increaseSugar}>+10</button>}
      </div>
    </>
  )
}

export default Products