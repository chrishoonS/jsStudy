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

ctx.moveTo(50, 10); //x, y
ctx.lineTo();