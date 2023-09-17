'use client'
import { increment,decrement } from "../lib/redux/Features/Counters/counterSlice";
import { useSelector, useDispatch } from "react-redux";

function Counter() {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
  return (
    <div>
        <h1 className="text-white w-80">{count}</h1>
        <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    </div>
  )
}

export default Counter;