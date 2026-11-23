//do while
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);


// begin 생략 가능 
let j = 0; // j를 선언 값도 할당.
for (; j < 3; j++) { // 'begin'이 필요하지 않기 때문에 생략.
  alert( j ); // 0, 1, 2
}

let k = 0;
for (; k < 3;) {
  alert( k++ );
}

// break: iter 중단
// continue: 다음 iter 실행

// ? 오른 쪽엔 break나 continue가 올 수 없음.
// 표현식이 아닌 문법 구조(syntax construct)는 삼항 연산자 ?에 사용할 수 없음.
// (i > 5) ? alert(i) : continue; 

// labelName: for (...) {...}
// break labelName에서 labelName에 해당하는 반복문으로부터 빠져나오게 함.
// 항상 반복문 안에서만 break labelName 사용 가능.
outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`(${i},${j})의 값`, '');

    // 사용자가 아무것도 입력하지 않거나 Cancel 버튼을 누르면 두 반복문 모두 종료.
    if (!input) break outer; // (*)

    // 입력받은 값을 가지고 무언가를 함
  }
}
alert('완료!');