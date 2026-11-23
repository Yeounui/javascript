// 단항 (Unary) 연산자: 피연산자(argument)를 하나만 받음.
let x = 1;
x = -x;
alert( x ); // -1

// 이항 (Binary) 연산자: 피연산자 두 개
let x1 = 1, y = 3;
alert( y - x1 ); // 2


// + str
let s = "my" + "string";
alert(s); // mystring

// +는 string 연결과 변환 기능 제공
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
alert( 2 + 2 + '1' ); // '41'

alert( 6 - '2' );  // 4
alert( '6' / '2'); // 3

// 숫자형 아닌 피연산자는 숫자형으로 변환.
alert( +true ); // 1
alert( +"" );   // 0

let apples = "2";
let oranges = "3";
alert( +apples + +oranges ); // 5, 이항 덧셈 연산자가 적용 전, 두 피연산자 숫자형 변화.

// 연산자 우선 순위
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence


// 할당 연산자
let a = 1;
let b = 2;
let c = 3 - (a = b + 1); // a에 3 할당 후, 이후 c 할당

alert( a ); // 3
alert( c ); // 0

// 할당 연산자 chaining.
let a1, b1, c1;
a1 = b1 = c1 = 2 + 2;

alert( a1 ); // 4
alert( b1 ); // 4
alert( c1 ); // 4

// 다른 연산자 사이의 증가·감소 연산자
let counter = 1;
alert( 2 * ++counter ); // 4

let counter1 = 1;
alert( 2 * counter1++ ); // 2, counter++는 '기존'값 반환.

//쉼표 연산자(comma operator): 한줄에서 여러 동작 처리
let a2 = (1 + 2, 3 + 4);
alert( a2 ); // 7 (3 + 4)

// 한 줄에서 세 개의 연산이 수행됨
// for (a = 1, b = 3, c = a * b; a < 10; a++) {...}