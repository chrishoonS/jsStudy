	// myText 아이디의 text를 가져옴
	var myText = document.querySelector("#myText");

	// click을 했을때, myText에 아래와 같은 효과 적용
	myText.addEventListener("click", function() {
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