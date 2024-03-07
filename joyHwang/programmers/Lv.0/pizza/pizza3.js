// 초기에 생각한 풀이
// function solution(slice, n) {
//     while(slice % n !== 0) {
//         slice ++;
//     } return slice / n;
// }

//정답
function solution(slice, n) {
    let answer = Math.ceil(n/slice);
    return answer;
}
console.log(solution(7, 10))