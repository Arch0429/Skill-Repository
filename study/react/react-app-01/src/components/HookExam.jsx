import useInput from "../hooks/useInput";

const HookExam = () => {
  const [input, onChange] = useInput(); 

  return (
    <>
      <input type="text" value={input} onChange={onChange}/> 
      {input}
    </>
  )
}

export default HookExam;