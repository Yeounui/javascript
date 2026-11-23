// 문자열 비교
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

alert( '2' > 1 );   // true, str '2'가 int 2로 변환 후 비교.
alert( '01' == 1 ); // true, str '01'이 int 1로 변환 후 비교.

// 주의
let a = 0;
alert( Boolean(a) ); // false
let b = "0";
alert( Boolean(b) ); // true
alert(a == b); // true!

// ===: 일치 연산자(strict equality operator): 자동 형변환 없이 비교
alert( 0 === false ); // false

alert( null === undefined ); // false
alert( null == undefined ); // true

// 동등 연산자 ==와 비교 연산자 <, >, <=, >=의 동작 방식 다름.
alert( null > 0 );  // false
alert( null == 0 ); // false
alert( null >= 0 ); // true, null이 숫자형으로 변환돼 0이 됨.

// undefined는 비교 불가.
// undefined가 NaN (숫자형)으로 변환. NaN이 피연산자인 경우 비교 연산자는 항상 false.
alert( undefined > 0 ); // false 
alert( undefined < 0 ); // false
// undefined는 null과는 같고, 그 외의 값은 같지 않기에 false.
alert( undefined == 0 ); // false