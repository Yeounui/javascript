let sum = (a, b) => a + b;

/* 위 화살표 함수는 아래의 축약.
let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3

// 인자가 하나 뿐이라면 괄호 생략 가능.
let double = n => n * 2;  
// let double = function(n) { return n * 2 }과 거의 동일.

alert( double(3) ); // 6

// 인자가 하나도 없을 땐 괄호 비워놓을 수 있음. 괄호 생략 불가.
let sayHi = () => alert("안녕하세요!");

sayHi();

// 동적 함수
let age = prompt("나이를 알려주세요.", 18);

let welcome = (age < 18) ?
  () => alert('안녕') :
  () => alert("안녕하세요!");

welcome();

// 중괄호: 여러 줄
let sum1 = (a, b) => {
  let result = a + b;
  return result; // 중괄호 사용 시, return 지시자로 결괏값을 반환.
};

alert( sum1(1, 2) ); // 3