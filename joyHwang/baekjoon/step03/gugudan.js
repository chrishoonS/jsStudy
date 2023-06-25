//단 수 
//곱 수
//개행 (조건문) 5단, 7단 (5이상의 홀수, 7이상의 홀수로 판별)

// \t
for (let i = 2; i <=9; i++) {
    console.log(i + '단');
    for(let j = 1; j <=9; j++) {
        console.log( i + '*' + j + "=" + i*j);
    }   
}


var result="";
for (var i = 1; i < 10; i++) {
        for (var j = 2; j < 6; j++) {
          result += j + " X " + i + " = " + j * i + "\t";
        }
        result += "\n";
      }



