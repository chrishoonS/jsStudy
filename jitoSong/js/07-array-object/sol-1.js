var numbers = [2, 4, 6, 8, 10]; //배열 선언
showArray(numbers); //numbers 배열 받아서 함수 호출 [2,4,6,8,10]

var sum = 0; //sum 변수 초기화
for(var i=0; i<numbers.length; i++) { //numbers 배열의 길이 5만큼 반복 0 1 2 3 4
    sum += numbers[i]; //배열의 값들을 차례대로 더하여 sum 변수에 저장 30
}
numbers.push(sum); //배열 마지막 요소에 sum변수를 추가한다. [2, 4, 6, 8, 10, 30]
showArray(numbers); // [2,4,6,8,10,30]

function showArray(arr) {
    var str = "<table><tr>"; // 배열을 테이블 형태로 담아 출력
    for (var i=0; i<arr.length; i++) { //1) 받은 배열의 길이만큼 반복하여 더하고 str에 저장
        str += "<td>" + arr[i] + "</td>";
    }
    str += "</tr></table>";
    document.write(str); //테이블 출력
}