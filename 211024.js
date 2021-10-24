// 문자열 내 마음대로 정렬하기

function solution(strings, n) {
    return strings.sort((a, b) => (a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])));
}
// console.log(solution(["abce", "abcd", "cdx"], 2));

// 이상한 문자 만들기

function solution(s) {
    return s
        .split(" ")
        .map((str) =>
            str
                .split("")
                .map((el, idx) => (idx % 2 === 0 ? el.toUpperCase() : el.toLowerCase()))
                .join(""),
        )
        .join(" ");
}
// console.log(solution("try hello world"));

// 자릿수 더하기

function solution(n) {
    return `${n}`.split("").reduce((el, i) => (el += Number(i)), 0);
}

// 짝수와 홀수

function solution(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

// 평균 구하기

function solution(arr) {
    return arr.reduce((i, el) => (i += el), 0) / arr.length;
}

// 하샤드 수

function solution(x) {
    return x % `${x}`.split("").reduce((i, el) => (i += Number(el)), 0) === 0;
}

// 핸드폰 번호 가리기

function solution(phone_number) {
    return phone_number
        .split("")
        .map((el, idx) => (phone_number.length - idx > 5 ? "*" : el))
        .join("");
}

// 행렬의 덧셈

function solution(arr1, arr2) {
    return arr1.map((el, idx) => el.map((e, i) => (e += arr2[idx][i])));
}
