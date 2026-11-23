let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');
// if (year == 2015) alert( '정답입니다!' );

if (year < 2015) {
  alert( '숫자를 좀 더 올려보세요.' );
} else if (year > 2015) {
  alert( '숫자를 좀 더 내려보세요.' );
} else {
  alert( '정답입니다!' );
}

// 동등 비교로 true|false.
let cond = (year == 2015); 
//if (cond) {...};

// ? 조건 연산자: let result = condition ? value1 : value2;
let accessAllowed = age > 18 ? true : false;
