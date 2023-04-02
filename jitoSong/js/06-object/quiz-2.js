var r = prompt("원의 반지름은? (cm)"); //원의 반지름을 sting으로 받는다.
var circle1 = new Circle(r); //Circle 객체를 생성하여 circle1 변수에 저장

//Circle 객체의 메서드 circumference를 사용하여 원의 둘레 불러옴. area 메서드를 사용하여 넓이 불러옴.
document.write("반지름이 " + r + "cm일 때" + "<br>원의 둘레 : 약 " + circle1.circumference() + "cm <br>원의 넓이 : 약 " + circle1.area()+"cm<sup>2</sup>");	

function Circle(r) { //Circle은 내장객체?? this로 선언해서 함수를 지정할 수 있는 것을 보면..
    this.r = r, //인자로 받은 반지름r 초기화
    this.circumference = function() {
        return Math.floor(this.r * 2 * Math.PI); //반지름 * 2 * 원주율
    }
    this.area = function() { 
        return Math.floor(Math.pow(this.r, 2) * Math.PI); //반지름의 제곱 * 원주율
    }
}