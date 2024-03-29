//문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string, letter) {
  let string = my_string.split(""); //[ 'h', 'e', 'l', 'l', 'o' ]
  let answer = "";

  for (i = 0; i < my_string.length; i++) {
    if (string[i] !== letter) {
      answer += string[i];
    }
  }
  return answer;
}
console.log(solution("BCBdbe", "B"));

// let my_string = "abcdef";
// let letter = "f";
// let string = my_string.split(""); //[ 'a', 'b', 'c', 'd', 'e', 'f' ]
// let answer = "";

// for (i = 0; i < my_string.length; i++) {
//   if (string[i] !== letter) {
//     answer += string[i];
//   }
// }
// console.log(answer);
