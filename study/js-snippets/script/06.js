//  배열의 변형

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  {name: "Jun", age: 31}, 
  {name: "Kim", age: 60}, 
  {name: "Park", age: 10}, 
]

const  filteredArr = arr1.filter((item) => item.name === "Jun");

// 2. map
// 배열의 모든 요소를 순회하면서, 각각의 콜백 함수를 실행하고
// 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];

const mapResult = arr2.map((item, idx, arr) => {
  return item * 2;
})

// arr1 에서 name 키를 가진 값만 뽑아서 새로운 배열로 반환
const names = arr1.map((item) => item.name);

// 3. sort
// 배열을 사전순으로 정렬하는 메소드
// ※ "사전순" 으로 정렬하기 때문에 숫자는 정렬이 잘안될수 있다. (콜백함수 추가 필요)
let arr3 = ["b", "a", "c"];
let arr4 = [10, 3, 5];

// 오름차순 정렬 (내림차순은 리턴을 반대로)
arr4.sort((a, b) => {
  if (a > b) {
    // b가 a 앞으로 오도록
    return 1;
  } else if ( a < b) {
    // a가 b 앞으로 오도록
    return -1;
  } else {
    // 두 값의 자리를 바꾸지 않도록
    return 0;
  }
})

arr3.sort();

// 4. toSorted
// sort 와 동일하나 원본 배열은 놔두고 새로운 배열을 반환
let arr5 = ["c", "b", "a"];

const sorted = arr5.toSorted();

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메소드
let arr6 = ["Hello", "World", "!!"];

// seperator 를 인자로 받음. default = ,
const joined = arr6.join(" ");

console.log(joined);