const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// ctx.fillRect 사각형을 만드는 함수 x, y, width, height
// ctx.rect(50, 50, 100, 100);
// ctx.rect(150, 150, 100, 100);
// ctx.rect(250, 250, 100, 100);
// ctx.fill();

// ctx.beginPath(); //path를 새로 설정해줘야 위 박스와 아래 박스가 구분이 됨(색상 변경)
// ctx.rect(350, 350, 100, 100);
// ctx.rect(450, 450, 100, 100);
// ctx.fillStyle = "red";
// ctx.fill();

// ctx.moveTo(50, 10); //x, y
// ctx.lineTo(150, 50);
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// ctx.fill();

//house
// ctx.fillRect(200, 200, 50, 200) //left wall
// ctx.fillRect(400, 200, 50, 200) //right wall
// ctx.lineWidth = 2; //door width
// ctx.fillRect  (300, 300, 50, 100) //door
// ctx.fillRect(200, 200, 200, 20) //ceil
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100); //지붕 left
// ctx.lineTo(450, 200); //지붕 right
// ctx.fill();


//person
ctx.fillRect(210 - 40, 200 - 30, 15, 100);
ctx.fillRect(350 - 40, 200 - 30, 15, 100);
ctx.fillRect(260 - 40, 200 - 30, 60, 200);

ctx.arc(250, 100, 50, 0, 2 * Math.PI); //x y radius startAngle endAngle  //2*PI는 완전한 원 https://www.w3schools.com/jsref/canvas_arc.asp
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(260 + 10, 80, 8, Math.PI, 2 * Math.PI); 
ctx.arc(220 + 10, 80, 8, Math.PI, 2 * Math.PI); 
ctx.fill();
