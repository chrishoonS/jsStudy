var buttons = document.querySelectorAll(".check"); //체크 span을 buttons라는 변수로 저장
for(var i=0; i<buttons.length; i++) { //i는 0부터 시작해서 buttons의 length보다 작을 때까지 반복한다.
    buttons[i].addEventListener("click", function() { //버튼이 어떤 순서이든, 클릭하면 어떠한 동작을 넣을 것이다.
        this.parentNode.style.color = "#ccc"; //그 동작: 부모 노드의 폰트 컬러를 바꾼다.
    });
}