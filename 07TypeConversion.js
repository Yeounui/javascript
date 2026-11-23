// toString: 
let value = true;
alert(typeof value); // boolean
value = String(value); // 변수 value에 str "true" 저장.
alert(typeof value); // string

// toNumber:
alert( "6" / "2" ); // 문자열이 숫자형으로 자동변환 후 연산 수행.

let str = "123";
alert(typeof str); // string
let num = Number(str); // 문자열 "123"이 숫자 명시적 변환.
alert(typeof num); // number

let age = Number("임의의 문자열 123");
alert(age); // NaN, 형 변환 실패.
/*
전달받은 값     형 변환 후
undefined	    NaN
null	        0
true|false	    1|0
string	        문자열 양단 공백 strip.
                공백 제거 후 문자열 없다면 0,
                있다면 문자열 숫자 읽음.
                변환 실패 시 NaN.
*/
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN ("z"를 숫자로 변환하는 데 실패함)
alert( Number(true) );        // 1
alert( Number(false) );       // 0

// toBoolean
alert( Boolean(1) );        // 1 (true)
alert( Boolean(0) );        // 0 (false)
alert( Boolean("hello") );  // str    (true)
alert( Boolean("") );       // 빈 str (false)
alert( Boolean("0") );      // str "0" (true)
alert( Boolean(" ") );      // 공백 (true)