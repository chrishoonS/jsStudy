//최빈값 구하기

//예제
// [1, 2, 3, 3, 3, 4] - 3
// [1, 1, 2, 2] - -1
// [1] -1

function solution(array) {
    const counts = array.reduce((acc, element) => { 
        acc[element] = (acc[element] || 0) + 1;
        return acc;
    }, {}); //{1:1, 2:1, 3:3, 4:1}
    
    // 빈도수가 가장 높은 값 찾기
    let maxCount = Math.max(...Object.values(counts)); //객체의 값들을 배열로 반환 [1, 1, 3, 1]
    
    // 최빈값이 여러 개인 경우 -1 반환
    if (Object.values(counts).filter(count => count === maxCount).length > 1) {
        return -1;
    }
    
    // 최빈값 찾기
    let mode = Object.keys(counts).find(key => counts[key] === maxCount); //객체의 키들을 배열로 변환 [1, 2, 3, 4], find 메서드 충족하는 값 찾기
    
    return parseInt(mode);
}

// console.log(solution([1, 2, 3, 3, 3, 4])); 3
console.log(solution([[1, 1, 2, 2]])); -1
// console.log(solution([1])); 1



