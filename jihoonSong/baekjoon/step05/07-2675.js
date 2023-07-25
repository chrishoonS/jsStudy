// 문자열 반복

let input = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().trim().split('\n');
let result = '';
for(let i=0; i<+input[0]; i++){
    let [R ,S] = input[i+1].split(' ');
    for(let j=0; j < S.length; j++){
        for(let k=0; k < +R; k++){
            result += S.charAt(j);
        }

    }
    result += '\n';
}

console.log(result.trim());

// 2차원 배열 이용
// input.forEach(function(v , index) {
//     input[index] = v.split(' ')
// });

// for(i = 0; i < parseInt(input[0][0]); i++){
//     var printArr = "";
//     for ( k = 0; k < input[i+1][1].length; k++){
//         for(j =0; j < parseInt(input[i+1][0]); j++){
//             printArr += input[i+1][1][k]
//         }
//     }
//   console.log("%s", printArr);
// }