var myText = document.querySelector("#myText"); //querySelector로 아이디와 아이디값을 함께 선언
myText.addEventListener("click", function() { //클릭하면 다음과 같은 css 먹도록
    myText.style.fontSize = "20px";
    myText.style.color = "blue";
    myText.style.backgroundColor = "#ccc";
});

/* 또는 
var myText = document.querySelector("#myText");
myText.onclick = function() {
    myText.style.fontSize = "20px";
    myText.style.color = "blue";
    myText.style.backgroundColor = "#ccc";
};
*/

//onclick보다 addEventListener가 여러 이벤트를 한번에 선언 할 때 유용하기 때문에 더 권장.