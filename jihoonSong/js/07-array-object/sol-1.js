		// numbers 배열 초기화
		var numbers = [2, 4, 6, 8, 10];
		showArray(numbers);

		var sum = 0;
		for(var i=0; i<numbers.length; i++) {
			sum += numbers[i];
		}
		numbers.push(sum);
		showArray(numbers);

		//showArray 함수 선언, 프로그램 실행시 호이스팅 적용
		function showArray(arr) {
			var str = "<table><tr>";
			// 배열 길이만큼 하나식 요소를 꺼내 반복문으로 다음과 같이 출력
			// <td>2</td>
			// <td>4</td>
			// <td>6</td>
			// <td>8</td>
			// <td>10</td>
			for (var i=0; i<arr.length; i++) {
				str += "<td>" + arr[i] + "</td>";
			}
			str += "</tr></table>";
			document.write(str);
		}