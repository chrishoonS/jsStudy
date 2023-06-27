// 구구단-응용
let result = ""; // 결과 출력용 변수
let tmp = 0;     // loop 한번 돌 때 3개의 단 출력 후 더해질 임의 수

for(let k=0; k<3; k++){                     // 가로줄 총 3번 출력을 위한 for문
    for (let i=1; i < 10; i++) {            // 세로줄 각 10번씩 출력을 위한 for문
        for (let j=2+tmp; j < 5+tmp; j++) { // 각 단의 수를 위한 for문
            if(j == 10) break;              // 마지막 10단은 출력 X

            // 곱셈한 계산식을 이어붙임. 2 X 1 = 2       3 X 1 = 3       4 X 1 = 4 형태로
            result += j + " X " + i + " = " + j * i + "\t";
        }
        result += "\n"; // 각 가로줄 출력에 대한 개행
    }

    result += "\n";     // 3개의 단 출력 후 개행
    tmp += 3;
}

console.log(result);
