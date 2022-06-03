function solution(n) {
    const mem = [1, 1, 2, 3];
    if (n < 4) return mem[n] % 1000000007;
    for (let i = 4; i <= n; i++) mem.push((mem[i - 2] + mem[i - 1]) % 1000000007);
    return mem[n];
}
console.log(solution(6));
