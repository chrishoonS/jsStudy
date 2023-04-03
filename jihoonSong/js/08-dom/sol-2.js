		//check 클래스 요소를 모두 가져옴
		var buttons = document.querySelectorAll(".check");
		
		//click시 이벤트 적용, 모든 check에 효과를 주기 위해 반복문 사용
		for(var i=0; i<buttons.length; i++) {
			buttons[i].addEventListener("click", function() {
				this.parentNode.style.color = "#ccc";
			});
		}