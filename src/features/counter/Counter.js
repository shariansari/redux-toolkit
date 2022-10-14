import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from './counterSlice'

function Counter() {
    const count = useSelector((state) => state.counter.count)
    const themeTextColor = useSelector((state) => state.theme.color)

    
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=>{dispatch(increment())}}>+</button>
        <span style={{color:themeTextColor}}> count:{count}</span>
        <button onClick={()=>{dispatch(decrement())}}>-</button>
        <button onClick={()=>{dispatch(incrementByAmount(10))}}>INCREMENT BY 10</button>
      
    </div>
  )
}

export default Counter
