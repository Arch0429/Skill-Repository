import { useState } from "react";
import Counter from "./Counter";

function Main() {
  const [total, setTotal] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleTotal = () => {
    setTotal(total + 1);
  }

  return (
    <main>
      <h2>Total : {total}</h2>
      <h2>Flag : {flag.toString()}</h2>
      <button onClick={() => {
        setFlag(!flag);
      }}>Toggle Flag</button>
      <Counter onTotal={handleTotal}/>
      <br/>
      <br/>
      <Counter onTotal={handleTotal}/>
    </main>
  )
}

export default Main;