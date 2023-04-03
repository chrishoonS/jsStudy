		//prompt로 문자열을 입력받아 parseInt로 parsing하여 num1, num2에 int로 저장
		let num1 = parseInt(prompt("비교할 첫 번째 숫자: "));
		let num2 = parseInt(prompt("비교할 두 번째 숫자 : "));

		//위에서 받은 num1, num2를 compareTwo 함수 호출
		compareTwo(num1, num2);

		//호이스팅에 의해 자바스크립트가 실행되면서 코드의 맨위로 선언됨
		function compareTwo(x, y) {
			//if-else 문을 통해 조건별로 실행할 코드 작성함.
			if (x == y)
				alert(x + "와(과) " + y + "는 같습니다.");
			else if (x > y)
				alert( x + "(이)가 " + y + "보다 큽니다.");
			else
				alert(y + "(이)가 " + x + "보다 큽니다.");
		}