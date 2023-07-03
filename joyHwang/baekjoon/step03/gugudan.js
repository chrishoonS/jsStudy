//구구단 응용
let result="";
for(let k = 0; k < 4; k++) { //가로로 4단씩 반복
  for (let i = 1; i < 10; i++) {//9까지 곱해지는 수 반복
    for (let j = 2; j < 6; j++) {//각 단 수 반복
      result += j + " X " + i + " = " + j * i + "\t";
    }
    result += "\n";
  }
  result += "\n";
}
console.log(result)




