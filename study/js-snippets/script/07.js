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
 // console.log(arg);

  f1("Second", function(arg) {
   // console.log(arg);

    f1("Third", function(arg) {
     // console.log(arg);
    });
  })
});

// 2. Promise
function add10(num) {
  return new Promise((resolve, reject) => {
    // executor
    setTimeout(function() {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject(new Error(`${num} type is not a number`));
      }
    }, 1000);
  })
}

add10(0)
  .then((value) => {
 //   console.log(value);
    return add10(value);
  })
  .then((value) => {
 //   console.log(value);
    return add10(value);
  })
  .then((value) => {
 //   console.log(value);
  })
  .catch((err) => {
 //   console.log(err);
  })