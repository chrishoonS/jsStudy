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
const basket = [];

/* for (let i = 0; i < n; i++) {
    basket.push(i+1); //1을 넣는 이유는 초기에 공이 1개씩 들어있기 때문
    console.log(basket)
} */
for (let i = 1; i <= n; i++) {//1부터 시작하는 이유는 초기에 공이 1개씩 들어있기 때문
    basket.push(i); 
    //console.log(basket)
    //[ 1 ][ 1, 2 ][ 1, 2, 3 ][ 1, 2, 3, 4 ][ 1, 2, 3, 4, 5 ]
    //처음에는 바구니에 적혀있는 번호와 같은 번호가 적힌 공이 들어있다.
}

/* for (let i = 0; i < m; i++) {
    const [I, J] = input[i+1].trim().split(' ').map(x => parseInt(x));//1번째 인덱스부터 배열에 넣어져야 해서 +1 해주기
    console.log(i)
    console.log(I, J)
    let temp = basket[I-1];
    basket[I-1] = basket[J-1];
    basket[J-1] = temp;
} */

for (let i = 1; i <= m; i++) {
    const [I, J] = input[i].trim().split(' ').map(x => parseInt(x)); //I번 바구니 J번 바구니
    //------
    let temp = basket[I-1]; //basket배열 요소값이 아니라 배열의 인덱스로 접근해야하므로 -1
    basket[I-1] = basket[J-1];//basket배열 요소값이 아니라 배열의 인덱스로 접근해야하므로 -1
    basket[J-1] = temp;
    console.log('I' + basket[I-1]);
    console.log(basket[J-1] );
}
console.log(basket.join(' '));



//배열 바꾸기
// let fruits = ["Apple", "Banana", "Orange", "Mango"];

// let tmp = fruits[2]; tmp:임시변수
// fruits[2] = fruits[0]; [2]번에 [0]번을 넣는다. ["Apple", "Banana", "Apple", "Mango"];
// fruits[0] = tmp

// console.log( fruits ); // ["Orange", "Banana", "Apple", "Mango"]