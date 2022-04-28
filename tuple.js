function solution(s) {
    const ans = [];
    s = s
        .replace(/{{|}}/g, "")
        .split("},{")
        .map((el) => el.split(",").map(Number))
        .sort((a, b) => a.length - b.length);
    s.forEach((el) => {
        let diff = el.filter((str) => !ans.includes(str));
        if (diff) ans.push(diff[0]);
    });
    return ans;
}

console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));
