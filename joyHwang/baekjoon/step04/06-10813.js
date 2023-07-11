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

let basket = new Array(n).fill(1); //배열을 만들어서 1로 채워둔다. (공이 1개씩 들어있기 때문)

for(let i = 1; i <= m; i++) {
    const a = input[i].split(" ").map(Number);//input 배열을 공백으로 구분해서 숫자로 변환 [ 1, 2 ] [ 3, 4 ] [ 1, 4 ] [ 2, 2 ]

    const basket1 = a[0]; //0번 바구니
    const basket2 = a[1]; //1번 바구니
    const basket3 = a[2]; //2번 바구니
    const basket4 = a[3]; //3번 바구니
    const basket5 = a[4]; //4번 바구니

    
}
