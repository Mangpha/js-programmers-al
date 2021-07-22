function solution(n) {
    const memo = [0, 1, 1];
    for (let i = 3; i <= n; i++) memo[i] = (memo[i - 2] + memo[i - 1]) % 1234567;
    return memo[n];
}
console.log(solution(10));
