//정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(num_list) {
  let even = 0;
  let odd = 0;

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 == 1) {
      //홀수
      odd += 1; //result = result + i
    } else {
      even += 1;
    }
  }
  return (answer = [even, odd]);
}
console.log(solution([1, 2, 3, 4, 5]));

//다른 사람 풀이

// function solution(num_list) {
//   var answer = [0, 0];

//   for (let a of num_list) {
//     answer[a % 2] += 1;
//   }

//   return answer;
// }
//a를 2로 나누면 어차피 0아니면 1만 나오니까 answer의 인덱스로 a%2를 넣어주고 1씩 증가시키게 해주었다.
//0이 나오면 짝수로 answer[0]에 1씩 추가되고, 1이 나오면 홀수로 answer[1]이 1씩 더해진다.
// console.log(solution([1, 2, 3, 4, 5]));
