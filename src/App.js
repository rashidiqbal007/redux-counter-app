import React from 'react'
import './App.css'

import { useSelector } from 'react-redux/es/exports'
// dispatch jo action call kr rhe ho neeche usko trigger krta hai
import { useDispatch } from 'react-redux/es/exports'

// to call inc and dec functions in the plus minus buttons
import { incNumber } from './actions/index'
import { decNumber } from './actions/index'


const hellotesting123 = () => {
  // useSelector can access the initial state from the reducer to show initial state
  const mystate = useSelector((state) => state.ChangeTheNumber);
  const dispatch = useDispatch();
  return (
      
      <div className='container'>
          <h1>INCREMENT/DECREMENT COUNTER</h1>
          <h4>using react & redux</h4>
          <div className='quantity'>

            <a className='quantity-minus' onClick={() => dispatch(decNumber())}><span> - </span></a>

            <input type = "text" name='quantity' className='inputfield' value={mystate}/> 

            <a className='quantity-plus' onClick={ () => dispatch(incNumber())}><span> + </span></a>

          </div>
      </div>
  )
}

export default hellotesting123;

//