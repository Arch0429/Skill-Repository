// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을수 있다.
// 2. 숫자, 문자열, 배열의 값만 렌더링된다.
// 3. 모든 태그는 닫혀있어야한다.
// 4. 최상위 태그는 반드시 하나여야만 한다.
import "./Main.css";

const Main = () => {
  const user = {
    name: "Jun",
    isLogin: true
  }

  if (user.isLogin) {
    return <div className="logout">Logout</div>
  } else {
    return <div>Login</div>
  }
  
  // return (
  //   <>
  //     {user.isLogin ? <div>Logout</div> : <div>Login</div>}  
  //   </>
  // )
}

export default Main;