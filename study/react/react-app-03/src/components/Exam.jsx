import { useReducer } from "react";

// reducer: 변환기
// -> 상태를 실제로 변환시키는 변환기의 역할을 한다.
function reducer(state, action) {
  if (action.type == "INCREASE") {
    return state + action.data;
  }

  if (action.type == "DECREASE") {
    return state - action.data;
  }
}

const Exam = () => {
  // dispath: 발송하다. 급송하다.
  const [state, dispatch] = useReducer(reducer, 0); 

  const onClickPlus = () => {
    // 인수: 상태를 어떻게 변화시키길 원하는지....
    // Action Object
    dispatch({
      type: "INCREASE",
      data: 1
    });
  }

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1
    })
  }

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  )
}

export default Exam;