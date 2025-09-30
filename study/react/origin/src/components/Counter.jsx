import { useState } from "react";

function Counter({ onTotal }) {
  let [counter, setCounter] = useState(0);

  function handleCounter() {
    setCounter(counter + 1);
    onTotal();
  }

  return (
    <button onClick={handleCounter}>Counter : {counter}</button>
  )
}
export default Counter;