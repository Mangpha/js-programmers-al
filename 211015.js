// Programmers 없는 숫자 더하기
function solution(numbers) {
    return 45 - numbers.reduce((num, i) => (num += i), 0);
}
console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
