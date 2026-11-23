// alert: Modal window 출력
alert("Hello");

// prompt: prompt(title, [default]);
// 텍스트 입력 메시지 출력과 함께, 입력 필드 제공
// 확인: 사용자 입력 문자열 반환
// 취소 || Esc: null 반환
let age = prompt('나이를 입력해주세요.', 100);
alert(`당신의 나이는 ${age}살 입니다.`);

let test = prompt("Test", ''); // IE을 위한 매개변수 처리, 매개변수 없이는 undefined가 명시됨.

// confirm: confirm(question);
// 메시지가 창에 나타남. 
// 확인: true 반환
// 취소 || Esc: false 반환
let isBoss = confirm("당신이 주인인가요?");
alert( isBoss );
