		//prompt로 입력을 받아 문자열 형태로 r에 저장
		var r = prompt("원의 반지름은? (cm)");
		//Circle 객체를 이용해 circle 인스턴스 생성
		var circle = new Circle(r);

		document.write("반지름이 " + r + "cm일 때" + "<br>원의 둘레 : 약 " + circle.circumference() + "cm <br>원의 넓이 : 약 " + circle1.area()+"cm<sup>2</sup>");	

		/**
		 * Circle 생성자 함수 선언
		 * Circle() 생성자 함수의 prototype property는 Circle.prototyp을 가리키고, 이는 해당 생성자를 통해 생성된 객체의 부모객체
		 * 부모객체의 constructor 프로퍼티는 생성자 함수 Circle을 가리킴
		 * 생성자 함수도 Circle도 객체 이므로 함수 자체 __proto__ 프로퍼티가 존재하고 이는 Function.prototype 객체를 가리킨다.
		 * @param r {String} 반지름 값
		 **/ 
		function Circle(r) {

			this.r = r,
			//r값으로 원주율 계산 결과 리턴
			this.circumference = function() {
				return Math.floor(this.r * 2 * Math.PI);
			}
			//r값으로 원의 넓이 계산
			this.area = function() {
				return Math.floor(Math.pow(this.r, 2) * Math.PI);
			}
		}