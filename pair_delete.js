function solution(s) {
    const str = s.split("");
    const stack = [];
    let idx = 0;
    while (idx < str.length) {
        const first = stack[stack.length - 1];
        if (str[idx] === first) stack.pop();
        else stack.push(str[idx]);
        idx++;
    }
    return stack.length === 0 ? 1 : 0;
}
console.log(solution("abba"));
