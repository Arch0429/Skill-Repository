import { useState } from "react";

// Hook 관련 팁
// 1. Hook 은 반드시 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출 불가능
// 3. Custom Hook 을 만들수 있다!
function useInput() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value)
  }
  
  return [input, onChange];
}

export default useInput;