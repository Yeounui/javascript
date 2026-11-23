let message;
message = 'Hello!';

alert(message); // 변수에 저장된 값을 보여줍니다.

let user    = 'John',
    age     = 25,
    message2 = 'Hello';

// let과 미묘한 차이
var message3 = 'Hello';

/*
js는 함수형 언어로써, 변숫값 변경을 금지. => 같은 변수에 대해 한번만 정의 허용
*/

// 변수 이름 지을 때 camelCase.
let userName;
let test123;

let $ = 1; // '$'라는 이름의 변수를 선언합니다.
let _ = 2; // '_'라는 이름의 변수를 선언합니다.
alert($ + _); // 3

num = 5; // use strict 없을 시 정의 없이 할당 가능.
alert(num); // 5

//상수 Constant: 값 변경 불가
const myBirthday = '18.04.1982';

/* 
대문자 상수
기억하기 힘든 값을 변수에 할당해 별칭으로 사용하는 관습.
이런 상수는 대문자와 밑줄로 구성된 이름으로 명명
*/
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// 이후 색상 선택 시 별칭 사용 가능.
let color = COLOR_ORANGE;
alert(color); // #FF7F00

// runtime에 계산되어 고정되는 값도 상수화 가능.
const pageLoadTime = /* 웹페이지를 로드하는데 걸린 시간 */;
