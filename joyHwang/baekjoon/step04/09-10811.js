//바구니 뒤집기

/* 
5 4
1 2
3 4
1 4
2 2
*/

/*
3 4 1 2 5
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('joyHwang/baekjoon/step04/test.txt').toString().split('\n');

const [n, m] = input[0].split(" ").map(Number) //[5, 4]
// console.log([n, m])
const basket = []

for (let i = 1; i <=n; i++) {
    basket.push(i);
}
//console.log(basket)

for(let i = 1; i <= m; i++) {
    //console.log(i)
    let [a, b] = input[i].split(' ').map(Number);
    //console.log([a, b]) [ 1, 2 ] [ 3, 4 ] [ 1, 4 ] [ 2, 2 ]
    let tmpArr = [];
    for(let j = a-1; j < b; j++) { //-1은 0번째 index부터이기 때문
        tmpArr.push(basket[j]); 
        //console.log(basket)  [ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ] [ 2, 1, 3, 4, 5 ] [ 2, 1, 3, 4, 5 ] [ 2, 1, 4, 3, 5 ] [ 2, 1, 4, 3, 5 ] [ 2, 1, 4, 3, 5 ] [ 2, 1, 4, 3, 5 ] [ 3, 4, 1, 2, 5 ]
    };
    tmpArr.reverse();
    console.log(tmpArr)
    basket.splice(a-1, b-a+1, ...tmpArr);
    //b-a+1 총개수 구하기 위해
}
console.log(basket.join(' '))


/* spread 연산자 ... */


/* 
reverse() 함수는 배열의 순서를 거꾸로 만들어 줍니다
이 함수는 이 함수를 호출한 배열을 거꾸로 뒤집고, 그 배열을 가리키는 참조값을 반환합니다.

따라서, 이 함수를 실행시키면 원본 배열이 변형됩니다.

https://hianna.tistory.com/448
*/

/* 
splice()
배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
*/