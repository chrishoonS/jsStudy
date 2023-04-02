var buttons = document.querySelectorAll(".check");  //check라는 클래스명을 불러와서 buttons에 저장
for(var i=0; i<buttons.length; i++) { //buttons의 길이만큼 반복
    buttons[i].addEventListener("click", function() { //배열의 각 요소마다 일어날 이벤트
        this.parentNode.style.color = "#ccc"; //색상 지정
    });
}