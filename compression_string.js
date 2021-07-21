function solution(s) {
    if (s.length === 1) return 1;
    let strs = [];
    for (let i = 1; i <= Math.floor(s.length / 2); i++) {
        let count = 1;
        let str = "";
        for (let j = 0; j < s.length; j += i) {
            let cur = s.substr(j, i);
            let nxt = s.substr(j + i, i);
            if (cur === nxt) count++;
            else {
                if (count > 1) str += count + cur;
                else str += cur;
                count = 1;
            }
        }
        strs.push(str.length);
    }
    return Math.min(...strs);
}
console.log(solution("abcabcabcabcdededededede"));
