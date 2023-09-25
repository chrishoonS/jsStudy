// 알파벳 찾기

let input = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().trim();
let arr = new Array(26);

for(let i = 0; i < arr.length; i++) {
    arr[i] = -1;
}

for(let i = 0; i < input.length; i++) {
    //charCodeAt : 해당 문자의 ASCII code 값을 가져온다.
    let ch = input.charCodeAt(i); 
    // 97(ascii code) = 'a'
    // 해당하는 문자의 배열의 요소 값이 -1이면 문자열의 i번째로 값 대치
    if(arr[ch-97] == -1){ 
        arr[ch-97] = i
    }
}

console.log(arr.join(' '));

// 다른 풀이1
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().split('\n');

// solution(input[0]);

// function solution(input){
//     const result = [];
    
//     for (let i = 97; i <= 122; i++) {
//       result.push(input.indexOf(String.fromCharCode(i)));
//     }
//     console.log(result.join(" "));
// }


// 다른 풀이2
// let input = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().trim();

// let ascii=[]
// let k=0


// for(let i=97;i<123;i++){
//   let num=ascii.length
//   for(let j=0;j<input[0].length;j++){
//     if(input[0].charCodeAt(j)==i){
//       ascii[k++]=j
//       break;
//     }
//   }
//   if(num==ascii.length){
//     ascii[k++]=-1
//   }
// }
// let arr=ascii.reduce((a,c)=>{
//   return a+" "+c
// })
// console.log(arr.toString())