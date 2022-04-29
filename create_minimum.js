function solution(A, B) {
    A = A.sort((a, b) => a - b);
    B = B.sort((a, b) => b - a);
    return A.reduce((prev, curr, idx) => prev + curr * B[idx], 0);
}
console.log(solution([1, 4, 2], [5, 4, 4]));
