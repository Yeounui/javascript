"use strict";

// Function expression. 함수 표현식
function sayHi() {   // (1) 함수 생성 (함수 선언문, Function declaration)
  alert( "Hello" );
}

let func = sayHi;    // (2) 함수 복사 (함수 표현식)

func();  // Hello     // (3) 복사 함수를 실행(정상 실행)!
sayHi(); // Hello    //     본래 함수도 정상 실행.

// Callback function, 콜백 함수
function ask(question, yes, no) {
  if (confirm(question)) yes() // confirm에서 yes||no 선택
  else no();
}

function showOk() {
  alert( "동의하셨습니다." );
}
function showCancel() {
  alert( "취소 버튼을 누르셨습니다." );
}
// 함수 인자를 함수에 전달하고 이후 body 내에서 호출 (Callback)
// 함수 showOk와 showCancel가 ask 함수의 인수로 전달되어 이후 호출
ask("동의하십니까?", showOk, showCancel);

// 함수 표현식 vs 함수 선언문
/* 2.
    함수 표현식은 해당 함수에 실행 흐름이 도달했을 때 함수 생성.
    함수 선언문은 정의되기 전에도 호출 가능.
    전역 함수 선언문은 스크립트 위치에 상관없이 어디에서든 사용 가능.
*/
sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}
/*
sayHi("John"); // error!

let sayHi = function(name) {
  alert( `Hello, ${name}` );
};
*/

/* 3.
    엄격 모드에서
    함수 선언문이 코드 블록 내 위치 시, 해당 함수는 블록 내 어디서든 접근 가능.
    하지만 블록 밖에서는 함수에 접근 불가.
*/
let age = 16; // 16을 저장했다 가정합시다.

if (age < 18) {
  welcome();               // \   (실행)
                           //  |
  function welcome() {     //  |
    alert("안녕!");        //  |  함수 선언문은 함수가 선언된 블록 내
  }                        //  |  어디에서든 유효합니다
                           //  |
  welcome();               // /   (실행)

} else {

  function welcome() {
    alert("안녕하세요!");
  }
}

welcome(); // Error: welcome is not defined,
           // 중괄호 안에서 선언한 함수 선언문은 밖에서 호출할 수 없음.
/*
let age = prompt("나이를 알려주세요.", 18);

let welcome = (age < 18) ?
  function() { alert("안녕!"); } :
  function() { alert("안녕하세요!"); };

welcome(); // 제대로 동작합니다.
*/