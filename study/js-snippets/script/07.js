// sync VS async

// sync: 여러개의 작업을 순서대로 하나씩 처리
// Javascript 는 기본적으로는 "동기"적으로 코드를 실행한다.

// async: 동기적이지 않다. 작업을 순서대로 처리하지 않음.

// Web APIs: 브라우저가 직접 관리하는 별도의 영역(비동기 작업들이 실행)


// 1. callback
function f1(arg, callback) {
  setTimeout(() => {
    callback(arg);
  }, 1000);
}

f1("First", function(arg) {
  console.log(arg);

  f1("Second", function(arg) {
    console.log(arg);

    f1("Third", function(arg) {
      console.log(arg);
    });
  })
});