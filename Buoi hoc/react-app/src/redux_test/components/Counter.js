import React from 'react'
import { useSelector } from 'react-redux'

export default function Counter() {
    const dataCounter = useSelector((state) => state.counterReducer)
  return (
    <div>
        <h1>123</h1>
        {/* 1:29:58 */}
    </div>
  )
}
