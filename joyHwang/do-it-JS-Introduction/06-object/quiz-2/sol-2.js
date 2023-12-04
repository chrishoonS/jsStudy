var r = prompt("원의 반지름은? (cm)");
var circle1 = new Circle(r);
document.write("반지름이 " + r + "cm일 때" + "<br>원의 둘레 : 약 " + circle1.circumference() + "cm <br>원의 넓이 : 약 " + circle1.area()+"cm<sup>2</sup>");	

function Circle(radius) {
    this.radius = radius,
    this.circumference = function() {
        return Math.floor(this.radius * 2 * Math.PI); 
        //원의 둘레=반지름 x 2 x 3.14   
        //PI = 원주율, 파이
    }
    this.area = function() {
        return Math.floor(Math.pow(this.radius, 2) * Math.PI); 
        //원의 넓이= 반지름 x 반지름 x 3.14  
        //Math.pow: 제곱해주는 내장함수 (반지름의 2제곱)
    }
}