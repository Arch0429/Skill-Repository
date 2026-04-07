//  배열의 변형

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  {name: "Jun", age: 31}, 
  {name: "Kim", age: 60}, 
  {name: "Park", age: 10}, 
]

const filteredArr = arr1.filter((item) => {
  return item.name === "Jun";
})

console.log(filteredArr);