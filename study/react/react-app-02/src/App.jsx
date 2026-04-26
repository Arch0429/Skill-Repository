import { useEffect, useRef, useState } from 'react'
import './App.css'
import Controller from './components/Controller'
import Viewer from './components/Viewer'
import Even from './components/Even'

function App() {
  const [count, setCount] = useState(0); 
  const [input, setInput] = useState("");
  
  const isMount = useRef(false);

  // React Life Cycle
  // 1. Mount: 탄생
  useEffect(() => {
    
    console.log("mount");
  }, []);
  // 2. Update: 변화, 리랜더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;

      return;
    }
    console.log("update");
  })
  // 3. Unmount: 죽음

  // useEffect(() => {
  //   console.log(`count : ${count}`);
  //   console.log(`input : ${input}`);
  // }, [count, input]);
  // // 의존성 배열
  // // dependency array
  // // deps

  const onButtonClick = (value) => {
    setCount(count + value);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e) => {
          setInput(e.target.value);
        }} />
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 == 0 ? <Even></Even> : ""}      
      </section>
      <section>
        <Controller onButtonClick = {onButtonClick}/>
      </section>
    </div>
  )
}

export default App
