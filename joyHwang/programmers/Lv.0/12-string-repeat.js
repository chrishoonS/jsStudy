//문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

function solution(my_string, n) {
  let letter = my_string.split(""); //[ 'h', 'e', 'l', 'l', 'o' ]
  let answer = "";

  for (i = 0; i < my_string.length; i++) {
    for (j = 0; j < n; j++) {
      answer += letter[i];
    }
  }
  return answer;
}
console.log(solution("hello", 3));

// let my_string = "hello";
// let n = 3;
// let letter = my_string.split("");
// let answer = "";

// for (i = 0; i < my_string.length; i++) {
//   for (j = 0; j < n; j++) {
//     answer += letter[i];
//   }
// }
// console.log(answer);
