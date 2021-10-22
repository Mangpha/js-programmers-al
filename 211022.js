// 약수의 합
function solution(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) if (n % i === 0) ans += i;
    return ans;
}
// console.log(solution(12)); // 28

// 소수 찾기
function solution(n) {
    let count = 0;
    const arr = Array(n + 1).fill(true);
    (arr[0] = false), (arr[1] = false);
    for (let i = 2; i <= parseInt(n ** 0.5); i++) {
        if (arr[i]) for (let j = i * 2; j <= n; j += i) arr[j] = false;
    }
    return arr.filter((el) => el).length;
}
// console.log(solution(10));
