var myText = document.querySelector("#myText"); //myText라는 ID값을 가져와서 저장
myText.addEventListener("click", function() { //해당하는 ID값에 대한 이벤트
    myText.style.fontSize = "20px"; //글자크기
    myText.style.color = "blue"; //색상
    myText.style.backgroundColor = "#ccc"; //배경색
});

/* 또는 
var myText = document.querySelector("#myText");
myText.onclick = function() {
    myText.style.fontSize = "20px";
    myText.style.color = "blue";
    myText.style.backgroundColor = "#ccc";
};
*/