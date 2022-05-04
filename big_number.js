function solution(number, k) {
    const tmp = [];
    for (let i = 0; i < number.length; i++) {
        while (tmp.length && tmp[tmp.length - 1] < number[i] && k) {
            tmp.pop();
            k--;
        }
        tmp.push(number[i]);
    }
    if (k) return tmp.slice(0, number.length - k).join("");
    return tmp.join("");
}
console.log(solution("654321", 5));
