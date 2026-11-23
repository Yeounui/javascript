// nullish: 여러 피연산자 중 그 값이 ‘할당된' 변수를 찾을 때.
x = a ?? b // x = (a !== null && a !== undefined) ? a : b;와 동일 동작

let firstName = null;
let lastName = null;
let nickName = "바이올렛";

// null이나 undefined가 아닌 첫 번째 피연산자
alert(firstName ?? lastName ?? nickName ?? "익명의 사용자"); // 바이올렛

height = height ?? 100; // height 값이 할당되지 않았다면 100 할당.

let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0

// ?? 연산자 우선순위는 5. 복잡한 표현식 안에선 괄호 추가가 바람직.
let height1 = null;
let width = null;
// 괄호를 추가!
let area = (height1 ?? 100) * (width ?? 50);
alert(area); // 5000

// 원치 않는 결과
let area1 = height1 ?? (100 * width) ?? 50;

// 안정성 관련 이슈 때문에 ??는 &&나 ||와 함께 사용 못함.
// let x = 1 && 2 ?? 3;
let x = (1 && 2) ?? 3; // 제대로 동작.
alert(x); // 2