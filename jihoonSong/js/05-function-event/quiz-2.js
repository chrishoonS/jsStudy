		var num1 = parseInt(prompt("비교할 첫 번째 숫자: "));
		var num2 = parseInt(prompt("비교할 두 번째 숫자 : "));

		compareTwo(num1, num2);

		function compareTwo(x, y) {
			
			if (x == y)
				alert(x + "와(과) " + y + "는 같습니다.");
			else if (x > y)
				alert( x + "(이)가 " + y + "보다 큽니다.");
			else
				alert(y + "(이)가 " + x + "보다 큽니다.");
		}