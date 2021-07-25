function solution(w, h) {
    const gcd = (min, max) => (min % max === 0 ? max : gcd(max, min % max));
    return w * h - (w + h - gcd(w, h));
}
console.log(solution(8, 12));
