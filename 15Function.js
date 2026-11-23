// 같은 이름의 선언된 지역 변수가 외부 변수 보다 우선 시.

let userName = 'John';

function showMessage() {
  let userName1 = "Bob"; // 같은 이름을 가진 지역 변수를 선언합니다.
  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

showMessage();
alert( userName );

// return 반환 값.
function sum(a, b) {
  return a + b;
}
let result = sum(1, 2);
alert( result ); // 3