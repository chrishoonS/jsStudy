// 최소, 최대

// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const [A, B] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(n => parseInt(n))

const input = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().trim().split('\n');
const N = Number(input[0]);
let arr = input[1].split(" ");

for (let i = 0; i < N; i++) {
  arr[i] = Number(arr[i]);
}

let max = arr[0];
let min = arr[0];

for (let i = 0; i < N; i++) {
  if (max < arr[i]) max = arr[i];
  if (min > arr[i]) min = arr[i];
}

console.log(`${min} ${max}`);

/**

// sort() 함수는 파라미터(compareFunction)가 입력되지 않으면, 유니코드 순서에 따라서 값을 정렬
// [ 20, 10, 35, 30, 7 ]
// [1, 2, 3, 10] 순서로 정렬하기 위해서는 파라미터(compareFunction)를 활용

// sort(comapreFunction(a, b))
// 이 값이 생략되면, 배열의 element들은 문자열로 취급되어, 유니코드 값 순서대로 정렬
// 두 개의 배열 element를 파라미터로 입력

let str = '';
arr.sort(function(a, b)  {
    if(a > b) return 1;   // 리턴하는 값이 0보다 클 경우, b가 a보다 앞에 오도록 정렬
    if(a === b) return 0; // 만약 0을 리턴하면, a와 b의 순서를 변경 X
    if(a < b) return -1;  // 리턴하는 값이 0보다 작을 경우, a가 b보다 앞에 오도록 정렬
});

console.log(arr[0] + ' ' + arr[4]);

// 예제입력
// 5
// 20 10 35 30 7

**/