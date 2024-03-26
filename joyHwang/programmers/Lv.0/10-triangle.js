// "*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다. 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.

let number = 3;
let result = "";

for (let i = 1; i <= number; i++) {
  //줄이 반복
  console.log("i는: " + i);
  for (let j = 1; j <= i; j++) {
    //별이 누적
    result += "*";
    console.log("J는: " + j);
  }
  result += "\n";
  console.log(result);
}
