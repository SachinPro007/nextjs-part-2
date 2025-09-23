"use client";

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "@/store/slices/counterSlice";

function Counter() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center gap-4 mt-4 p-4 ">
      <button onClick={() => dispatch(decrement())} className="border-2 border-blue-700 rounded-3xl p-4">Dec</button>
      <div className="content-center text-3xl">{counter}</div>
      <button onClick={() => dispatch(increment())} className="border-2 border-blue-700 rounded-3xl p-4">Inc</button>
    </div>
  );
}

export default Counter;
