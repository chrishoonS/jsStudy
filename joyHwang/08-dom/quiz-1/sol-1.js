var myText = document.querySelector("#myText");
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