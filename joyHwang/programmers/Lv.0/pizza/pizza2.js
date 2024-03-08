function solution(n) {
    let pizza = 6;
    while(pizza % n !== 0) { //피자 먹는 사람이 6의 배수가 아니면
        pizza += 6 //피자 1판(6조각)을 더 추가하고
    } return pizza / 6 //6의 배수면 인 당 몇 조각씩 먹을 수 있는 지 피자 조각 수 대로 나누기
 }

 console.log(solution(4));