import { useState } from "react";
import Counter from "./Counter";

function Main() {
  const [total, setTotal] = useState(0);

  const handleTotal = () => {
    setTotal(total + 1);
  }

  return (
    <main>
      <h2>Total : {total}</h2>
      <Counter onTotal={handleTotal}/>
      <br/>
      <br/>
      <Counter onTotal={handleTotal}/>
    </main>
  )
}

export default Main;