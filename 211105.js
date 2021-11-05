// 이진 변환 반복하기
function solution(s) {
    let zero = 0;
    let count = 0;
    const reg = /0/g;
    while (+s !== 1) {
        const match = s.match(reg) ? s.match(reg).length : 0;
        if (match) {
            s = s.replace(reg, "");
            zero += match;
        }
        s = s.length.toString(2);
        count++;
    }
    return [count, zero];
}
console.log(solution("01110"));
