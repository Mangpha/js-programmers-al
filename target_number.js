function solution(numbers, target) {
    let answer = 0;
    const checking = (i, num) => {
        if (i < numbers.length) {
            checking(i + 1, num + numbers[i]);
            checking(i + 1, num - numbers[i]);
        } else {
            if (num === target) answer += 1;
        }
    };
    checking(0, 0);
    return answer;
}
console.log(solution([1, 1, 1, 1, 1], 3));
