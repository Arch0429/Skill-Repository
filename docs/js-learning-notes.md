# 자바스크립트에서 함수를 표현하는 방법

## 함수 선언식 (Function Declaration)
- `function` 키워드와 함수 이름으로 함수를 정의하는 방식  
- 코드 어디서든 호출 가능 (호이스팅 적용)
- `this`가 함수 내에서 새로 바인딩
- 파싱 시점에 생성
- 자체 `Context` 생성

```javascript
function myFunction() {
    // 함수의 내용
}
```

## 함수 표현식 (Function Expression)
- 변수 이름에 함수를 할당하는 방식
- 호이스팅 X
- `this`가 자동으로 상위 스코프에 바인딩
- 실행 시점에 생성
- 상위 스코프의 `Context` 그대로 사용
```javascript
const myFunction = function() { 
    // 함수 내용 
} 

// ES6 Arrow Function
const myFunction = () => { 
    // 함수 내용
}
```