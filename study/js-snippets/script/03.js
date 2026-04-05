// Spread & Rest Parameter

// 1. Spread : 흩뿌리다, 펼치다 라는 의미
// 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1,2,3];
let arr2 = [4, ...arr1, 5,6];

console.log(arr2);
console.clear();

let obj1 = {
  a: 1,
  b: 2,
}

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
}

console.log(obj2);
console.clear();

// 2. Rest Parameter
// 전달 받은 파라미터를 배열로 반환. 배열 API 활용 가능
function func_rest(...rest) {
  // console.log(rest);

  rest.forEach(function(each) {
    console.log(each);
  })
}

// Javascritp 기본 제공 속성으로 있는 arguments 는 배열이 아니라
// 배열 API 활용 불가능
function func_args() {
  console.log(arguments);
}

func_rest(...arr1);
func_args(...arr1);