var member1 = { //id, name, age, address를 key: value 형태로 가지고 있는 객체 선언
    id   	: 123, 
    name 	: "홍길동",
    age  	: 25,
    address : "서울"
};

document.write("<h2>" + member1.name + "</h2>"); //객체.속성명으로 값을 불러옴
document.write("<ul><li>id : " + member1.id + "</li>");
document.write("<li>나이 : " + member1.age + "</li>");
document.write("<li>주소 : " + member1.address + "</li></ul>");	