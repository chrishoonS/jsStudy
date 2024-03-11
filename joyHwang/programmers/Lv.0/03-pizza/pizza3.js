//n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를

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