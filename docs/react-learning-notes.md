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

<br/>

# 리액트에서 렌더링
## 랜더링
**컴포넌트 함수를 호출하는 것**
## 렌더링 트리거
### 초기 렌더링
**리액트 컴포넌트가 렌더링을 시작하게 만드는 것**을 의미한다.
리액트에서는 ``render()`` 메서드를 호출하여 초기 렌더링을 트리거 한다.  
초기 렌더링의 경우 ``DOM 노드`` 가 생성된다.
### 리렌더링
컴포넌트가 초기 렌더링 된 이후에 **다양한 조건에 따라** 리렌더링이 될 수 있다.  
- ``상태`` 변화 : 컴포넌트의 상태가 변경되면 해당 컴포넌트와 그 하위 컴포넌트도 리렌더링이 일어난다.
- ``Props`` 변화
- 부모 컴포넌트 리렌더링
- ``컨텍스트`` 변화
- ``forceUpdate() API`` 컴포넌트 강제 리렌더링

렌더링 이후 변경된 ``DOM 노드``가 있는지 계산한다.  
리렌더링이 자주 일어나면 불필요한 메모리 소모와 비용이 증가하기 때문에 최적화 작업이 필요하다.

## DOM 에 커밋 (DOM 업데이트)
컴포넌트를 렌더링(호출)한 후 DOM 을 업데이트한다.
- 초기 렌더링의 경우 리액트는 ``appendChild()`` 를 사용하여 생성한 모든 ``DOM 노드``를 화면에 표시한다.
- 리렌더링의 경우 리액트는 필요한 최소한의 작업을 적용하여 DOM 이 최신 렌더링 출력과 일치하도록 한다.

리액트는 렌더링 간에 차이가 있는 경우에만 ``DOM 노드``를 변경한다. 예를들어 ``버튼``과 ``인풋박스`` 가 있을때, 인풋박스의 값이 입력된 상태에서 ``버튼의 상태``가 변경 되더라도 인풋박스는 값을 유지한다.
