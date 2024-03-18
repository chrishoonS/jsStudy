//numbers의 평균값 구하기

function solution(numbers) {
    let sum = 0;
    for (i = 0; i < numbers.length; i ++) {
        sum += numbers[i];
        console.log("i:" + i + "/" + "sum:" + sum)
    }
    return answer = sum / numbers.length;
}
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))