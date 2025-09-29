# JSX(Javascript XML)
- 하나의 ``루트 엘리먼트`` 를 반환
- 마크업에 ``<div>`` 를 사용하고 싶지않다면 ``<></> `` 로 대체 가능
- 모든 태그는 명시적으로 닫기
- ~~거의~~ 대부분의 속성은 ``카멜케이스`` 로 작성
- 마크업 코드 내에서 ``Object`` 를 바로 사용 불가  
<br />

# 조건부 랜더링
- ``if 문``
``` javascript
function HeartIconBtn({ isFavorite = false }) {
     // True 일때만 채워진 아이콘 반환
     if(isFavorite) {
         return (
             <button className="btn">
                 <img className="icon-heart" src="/img/heart-fill-icon.svg" />        
             </button>
         )
     }

     return (
         <button className="btn">
             <img className="icon-heart" src="/img/heart-icon.svg" />        
         </button>
     )    
 }
 ```
- ``&&`` 논리 연산자
```javascript
{ 
  // 자바스크립트의 논리 연산자는 두 값이 모두 참일 경우에만 실행된다.
  // 앞의 값이 거짓일 경우에는 뒷 값은 처리하지 않는다.
  // 논리 연산자는 Boolean 값이 아닌 최종 실행 결과를 반환한다.
  // "" && "foo" -> result : ""
  // 2 && false -> result : false
  // "foo" && "bar" -> result : "bar"

  // link 가 false 인 경우에는 마크업을 랜더링 하지 않음.
  link && 
  <a className="btn" href={link} target="_blank" rel="noreferrer">
      <img className="btn__img" src="/img/link-icon.svg" /> 
  </a> /> 
}
```
- ``삼항 연산자``
```javascript
function HeartIconBtn({ isFavorite = false }) {
    return (
        <button className="btn">
            {
                // isFavorite ?
                // <img className="icon-heart" src="/img/heart-fill-icon.svg" /> :
                // <img className="icon-heart" src="/img/heart-icon.svg" />

                <img className="btn__img" src={isFavorite ? "/img/heart-fill-icon.svg" : "/img/heart-icon.svg"} />
            }
        </button>
    )   
}
```
<br/>

# 리스트 렌더링
```
 🚫 Warning: Each child in a list should have a unique “key” prop.
```
리액트에서는 각 배열 항목에 고유하게 식별할 수 있는 문자열 또는 숫자를 ``key``로 지정해야한다.
```html
<li key={item.id}>...</li>
```

💡``map()`` 호출 내부의 JSX 엘리먼트에는 항상 ``key`` 가 필요하다.
