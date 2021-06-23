function solution(n, lost, reserve) {
    let los = lost.filter((i) => !reserve.includes(i));
    let res = reserve.filter((i) => !lost.includes(i));
    los = los.filter((i) => {
        let f = res.find((j) => Math.abs(j - i) === 1);
        if (!f) return true;
        res = res.filter((j) => j !== f);
    });
    return n - los.length;
}
console.log(solution(5, [2, 4], [3]));
