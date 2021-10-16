function solution(n, t, m, p) {
    let str = "";
    for (let i = 0; i < t * m; i++) str += i.toString(n).toUpperCase();
    let ans = "";
    for (let j = p - 1; j < t * m; j += m) ans += str[j];
    return ans;
}
console.log(solution(16, 16, 2, 2));
