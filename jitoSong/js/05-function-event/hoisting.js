var x = 100; //x 변수에 100 값 대입

test(); //test라는 함수 호출

function test() { 			
	document.write("x is " + x + ", y is " + y); //출력이 먼저되어서
  var y = 200;  //뒤에 선언된 y는 undefined
}