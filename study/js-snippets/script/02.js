// 구조분해할당

// 1. 배열의 구조 분해 할당
let arr = [1,2,3];

let [one, two, three, four = 4] = arr;

console.log(one, two, three, four); // 1, 2, 3, 4

// 2. 객체의 구조 분해 할당
let person = {
  name: "Jun",
  age: 31,
  hobby: "Bolling"
}

let {name: nm, age, hobby, address="Mokdong"} = person;

console.log(nm, age, hobby, address);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
// React 에서 자주 사용됨
// ※ 객체를 넘겼을때만 매개변수를 구조분해 할당해서 받을수 있다.
function func({age, hobby, name}) {
  console.log(name, age, hobby);
}

func(person);