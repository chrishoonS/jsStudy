var num1 = parseInt(prompt("비교할 첫 번째 숫자: "));
var num2 = parseInt(prompt("비교할 두 번째 숫자 : "));

compareTwo(num1, num2); //함수 호출

function compareTwo(x, y) { //x, y 두 인자를 받는 함수
    
    if (x == y) //조건1
        alert(x + "와(과) " + y + "는 같습니다.");
    else if (x > y) //조건2
        alert( x + "(이)가 " + y + "보다 큽니다.");
    else //예외처리
        alert(y + "(이)가 " + x + "보다 큽니다.");
}