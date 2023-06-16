//입력 시 공백 자르고 String으로 받아옴
const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString().split("\n")

//예제 입력
//14 30 | 17 40
//20 | 80

//예제 출력
// mm+needTime 출력
//14 50 | 19 0

//String 객체로 받아온 것을 한 번더 Split 해주고 숫자로 변환!
let hh = Number(input[0].split(" ")[0])
let mm = Number(input[0].split(" ")[1])
let needTime = Number(input[1])

//분을 필요시간과 더한 값을 출력한다.
mm = mm + needTime
if (mm >= 60) { //분이 60분 초과되면
    //예: 40분 + 80분
    //분을 60분으로 나누고 내림. 몫을 시로 사용.
    hh = hh + Math.floor(mm / 60);
    //분 = 분을 60분으로 나눈 나머지를 분으로 사용
    mm = mm % 60;
  
    if (hh >= 24) { //시가 24시 이상이면
    // 0으로 바꿔주기
    hh = hh - 24;
    }

  }
  console.log(hh, mm);