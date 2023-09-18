'use client'
import { increment,decrement ,setAmount} from "../lib/redux/Features/Counters/counterSlice";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  let amount = 9;
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
  return (
    <div className="">
        <h1 className="text-black ">{count}</h1>
        <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={()=> dispatch(setAmount(amount))}>ADD BIATCH</button>
        </div>
    </div>
  )
}

export default Counter;