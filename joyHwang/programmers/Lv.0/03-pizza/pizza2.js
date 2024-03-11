//n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
function solution(n) {
    let pizza = 6;
    while(pizza % n !== 0) { //피자 먹는 사람이 6의 배수가 아니면
        pizza += 6 //피자 1판(6조각)을 더 추가하고
    } return pizza / 6 //6의 배수면 인 당 몇 조각씩 먹을 수 있는 지 피자 조각 수 대로 나누기
 }

 console.log(solution(4));