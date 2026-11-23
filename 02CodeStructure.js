alert('Hello'); alert('World')

// 개행 시 세미콜론 생략 가능; 가독성을 위해 alert는 서로 다른 줄에 작성
alert('Hello')
alert('World')

// 불완전한 코드 기에 세미콜론 없이도 개행 인지.
alert(3 +
1
+ 2);

// 세미콜론 필요하지만 추정하지 못하는 상황도 존재
alert("에러가 발생합니다."); // ; 밑의 forEach 동작 안함.

[1, 2].forEach(alert) 			// [...]앞에 세미콜론이 있다고 가정하지 않기 때문
/*
alert("에러가 발생합니다.")[1, 2].forEach(alert)로 인식하여 처리됨.
개행으로 statement 나눴더라도, 문 사이엔 세미콜론을 넣는 걸 권장.
*/