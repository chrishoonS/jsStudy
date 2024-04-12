// a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다.
// 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.

function solution(age) {
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  let answer = "";
  age = age.toString();

  for (let i = 0; i < age.length; i++) {
    answer += alphabet[age[i]]; // 2 3
  }

  return answer;
}

console.log(solution(23));
