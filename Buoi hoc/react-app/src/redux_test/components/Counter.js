import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap';
import { increeCount, increeCountWithParams } from '../feature/counterSlice';

export default function Counter() {
    const dataCounter = useSelector((state) => state.counterReducer)
    const dispatch = useDispatch();
  return (
    <div>
        <h1>{dataCounter.value}</h1>
        <Button onClick={() => {
          dispatch(increeCount())
        }}>Tang 1 don vi</Button>
        <Button onClick={() => {
          dispatch(increeCountWithParams(9))
        }}>Tang 9 don vi</Button>
    </div>
  )
}
