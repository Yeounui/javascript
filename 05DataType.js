// no error
// 자료 타입은 있지만 변수 값의 타입이 변경 가능한 언어 = ‘동적 타입(dynamically typed)’ 언어
let message = "hello";
message = 123456;

// number type
let n = 123;
n = 12.345;
alert( 1 / 0 ); // Infinity
alert( Infinity ); // 직접 참조

// js에서 행해지는 수학 연산은 '안전’ => 잘못된 연산에 대하여 NaN 반환
alert( "숫자가 아님" / 2 ); 
alert( "숫자가 아님" / 2 + 5 );

// BigInt: >(2^53-1)(9007199254740991) || <-(2^53-1) 
/*
BigInt형은 최근 표준 채택된 자료형으로, 길이 제약 없이 정수 표현 가능.
BigInt형 값은 정수 리터럴 끝에 n을 붙여 사용.
*/
const bigInt = 1234567890123456789012345678901234567890n;

/*
큰따옴표와 작은따옴표는 ‘기본’ 따옴표로, 자바스크립트에서는 차이를 두지 않음.
*/
let str     = "Hello";                      //큰따옴표
let str2    = 'Single quotes are ok too';   //작은따옴표
let phrase  = `can embed another ${str}`;   //역 따옴표(백틱, backtick)

let name = "John";

alert( `Hello, ${name}!` );         // 변수를 문자열에 삽입
alert( `the result is ${1 + 2}` );  // 표현식을 문자열에 삽입
alert( "the result is ${1 + 2}" );  // 큰따옴표는 확장 기능을 지원하지 않음.

// Boolean
let nameFieldChecked = true;
let ageFieldChecked = false;

let isGreater = 4 > 1;
alert( isGreater ); // true

//null
let age = null;

//undefined
/*
undefined 직접 할당 권장 않음.
변수가 ‘비어있거나’ ‘알 수 없는’ 상태로 나타내기 위해 null을 사용.
값이 할당되지 않은 변수의 초기값으로 남겨둠.
*/
let age2 = 100;
age = undefined; // 값을 undefined로 변경.
alert(age2);

//object

//typeof: 인수의 자료형 반환
typeof undefined    // "undefined"
typeof 0            // "number"
typeof 10n          // "bigint"
typeof true         // "boolean"
typeof "foo"        // "string"
typeof Symbol("id") // "symbol"
typeof Math         // "object": Math는 내장 객체이므로 "object" 출력.
typeof null         // "object": 별도 고유 자료형을 가지는 특수값으로 객체가 아님
                              // 하지만 하위 호환성 유지를 위해 남겨둠.
                              // 언어 자체의 오류.
typeof alert        // "function": 피연산자가 함수. 함수형은 따로 없음.
                              // 함수는 객체형에 속함. 이 동작 방식이 형식적으론 잘못됨.
                              // 하지만 하위 호환성 유지를 위해 남겨둠.