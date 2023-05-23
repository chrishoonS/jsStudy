		//member 상수 객체 생성
		const member = {
			id   	: 123, 
			name 	: "홍길동",
			age  	: 25,
			address : "서울",
			spec 	: "특기는 자바스크립트 공부중"
		};

		document.write("<h2>" + member.name + "</h2>");
		document.write("<ul><li>id : " + member.id + "</li>");
		document.write("<li>나이 : " + member.age + "</li>");
		document.write("<li>주소 : " + member.address + "</li></ul>");	
		document.write("<li>특징 : " + member.spec + "</li></ul>");	