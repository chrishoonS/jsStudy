//공 바꾸기

/* 5 4
1 2
3 4
1 4
2 2 */

/* 3 1 4 2 5*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('joyHwang/baekjoon/step04/test.txt').toString().split('\n'); //[ '5 4', '1 2', '3 4', '1 4', '2 2' ]

const n = Number(input[0].split(" ")[0]); //바구니 개수 변수 저장, 숫자로 변환 5
const m = Number(input[0].split(" ")[1]); //넣을 횟수 변수 저장, 숫자로 변환 4
//const [n, m] = Number(input[0].split(" ")) [5, 4]

let basket = new Array(n).fill(1); //배열을 만들어서 1로 채워둔다. (공이 1개씩 들어있기 때문)

for(let i = 1; i <= m; i++) {
    let [x, y] = input[i].split(" ").map(Number);//input 배열을 공백으로 구분해서 숫자로 변환 [ 1, 2 ] [ 3, 4 ] [ 1, 4 ] [ 2, 2 ]

    
    
}

//배열 바꾸기
// let fruits = ["Apple", "Banana", "Orange", "Mango"];

// let tmp = fruits[2]; tmp:임시변수
// fruits[2] = fruits[0]; [2]번에 [0]번을 넣는다. ["Apple", "Banana", "Apple", "Mango"];
// fruits[0] = tmp

// console.log( fruits ); // ["Orange", "Banana", "Apple", "Mango"]