import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // 클린업, 정리함수: useEffect 가 끝날 때, 실행되는 함수
    return () => {
      console.log("Unmount");
    };
  }, []);

  return (
    <div>짝수값</div>
  )
}

export default Even;