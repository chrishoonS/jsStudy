//공 넣기

/* 5 4  5개의 바구니, 4번 공을 넣을 것
1 2 3   1번~2번 바구니까지 '3번 공'을 넣는다
3 4 4
1 4 1
2 2 2 */


/* 1 2 1 1 0   1번 바구니부터 N번 바구니에 들어있는 공의 번호*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('joyHwang/baekjoon/step04/test.txt').toString().split('\n'); //[ '5 4', '1 2 3', '3 4 4', '1 4 1', '2 2 2' ]

const n = Number(input[0].split(" ")[0]);  //바구니 개수 변수 저장, 숫자로 변환 5
const m = Number(input[0].split(" ")[1]);  //넣을 횟수 변수 저장, 숫자로 변환 4

//const [n, m] = [0].split(" ").map(Number) [5, 4]

let basket = new Array(n).fill(0);
//배열을 만들어서 0으로 채워둔다. -- new 연산자 + Array 생성자 함수 + fill(0) 내장함수 사용하여 'n개의 element가 존재하는 Array를 만들고, 각 element에는 0이 담겨있다.'

 for(let i = 1; i <= m; i ++) { //공을 m번까지 넣는다. 0이 아닌 1번 인덱스부터 시작, 4번 반복!
    const a = input[i].split(" ").map(Number) //input 배열을 공백으로 구분해서 숫자로 변환  [ 1, 2, 3 ] [ 3, 4, 4 ] [ 1, 4, 1 ]
    
    const start = a[0];//i번 바구니
    
    const end = a[1];//j번 바구니
    
    const ballNum = a[2];//K번 번호

    //const [i, j, k] = input[i].split(" ").map(Number) [1, 2, 3]

    for(let j = start - 1; j < end; j++) { // 1 2 3 4 5 (바구니 순서)
    //바구니의 index부터 시작해야 하니까 -1 빼준다. (index는 0부터 시작)
      basket[j] = ballNum;  // 바구니 배열에 특정 번호의 공을 넣는다.
      console.log(j)
    }     
 }
 console.log(basket.join(" "));


/* join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만든다.
console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join */