// 배열의 순회와 탐색
// 1. forEach
// 배열의 모든 요소를 순회 하면서 특정 동작을 수행
let arr1 = [1, 2, 3];

arr1.forEach(function(item, idx, arr) {
  // console.log(idx, item * 2)
})

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
})

// 2. includes
// 배열의 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);

// 3. indexOf
// 배열의 특정 요소의 가장 첫번째 인덱스(위치)를 찾아서 반환하는 메서드
// 존재하지 않을 경우 -1을 반환
// 배열의 요소가 객체일 경우에는 찾을수 없음. findIndex 사용해야함
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는
// 배열의 특정 요소의 인덱스(위치)를 반환
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => item % 2 !== 0)

// 5. find
// 배열의 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 
// 요소를 그대로 반환
let arr5 = [
  {name: "Jun"},
  {name: "Kim"}
]

const finded = arr5.find((item) => item.name === "Jun");