// Truthy & Falsy

// Falsy 한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// Truthy 한 값
// Falsy 한 값을 제외한 모든 값은 Truty 하다..

// Javascript 의 단락 평가
// Javascript 는 맨 앞 조건의 결과가 True/False 일 경우
// 연산자의 조건에 따라서 뒤에 조건은 실행조차 하지 않는다.

// AND 연산자
let a = false;
let b = true;

// AND 연산자는 두가지 조건이 모두 참이여야 하는데 a 에서 이미 false 를 반환하기 때문에
// 뒤에 조건은 실행조차 하지 않는다.
console.log(a && b); // false

// OR 연산자는 두가지 조건 중 한가지만 참이여도 true 를 반환하기 때문에
// 앞 조건이 false 지만 뒤의 조건도 실행해서 true 인지 false 인지 검사한다.
console.log(a || b);  // true
