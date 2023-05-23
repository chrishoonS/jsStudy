var radius = document.querySelector("#radius"); //id radius로 정보 불러와서 저장
var start = document.querySelector("#start"); //id start로 정보 불러와서 저장

start.addEventListener("click", function() { //start변수에 대한 이벤트
    //round id로 불러온 값에 Number 내장객체의 원의 둘레값 * 원주율 * 2
    document.querySelector("#round").value = Number(radius.value) * Math.PI * 2; 
    //area id로 불러온 값에 Number 내장객체의 원주율 * 원의 둘레값의 제곱
    document.querySelector("#area").value = Math.PI * Number(radius.value) * Number(radius.value);
});