// 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다.
//정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

// function solution(emergency) {
//   let sorted= [...emergency].sort((a,b)=>b-a)
//   return emergency.map((num)=> num=sorted.indexOf(num)+1);
// }

let emergency = [3, 76, 24];
let sorted = [...emergency].sort((a, b) => b - a);
// console.log(emergency.map((num) => (num = sorted.indexOf(num) + 1)));

console.log(sorted);

//https://velog.io/@saemileee/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-Javascript-%EC%A7%84%EB%A3%8C-%EC%88%9C%EC%84%9C-%EC%A0%95%ED%95%98%EA%B8%B0
