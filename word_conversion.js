function solution(begin, target, words) {
    const conv = (str) => str.split("");
    const toAscii = (str, idx) => str.charCodeAt(idx);
    const que = [];
    const isVisited = Array(begin.length)
        .fill(0)
        .map((i) => (i = Array(toAscii("z", 0) - toAscii("a", 0) + 1).fill(false)));
    const wordsVisited = Array(words.length).fill(false);
    que.push([0, begin]);
    if (!words.includes(target)) return 0;
    while (que.length !== 0) {
        const [step, curStr] = que.shift();
        for (let i = 0; i < curStr.length; i++) {
            const str = conv(curStr);
            for (let j = Number(toAscii("a", 0)); j <= Number(toAscii("z", 0)); j++) {
                if (String.fromCharCode(j) != str[i]) {
                    str[i] = String.fromCharCode(j);
                    const nextStr = str.join("");
                    if (nextStr === target) return step + 1;
                    if (
                        !isVisited[i][j - 97] &&
                        words.includes(nextStr) !== -1 &&
                        !wordsVisited[words.indexOf(nextStr)]
                    ) {
                        isVisited[i][j - 97] = true;
                        wordsVisited[words.indexOf(nextStr)] = true;
                        que.push([step + 1, nextStr]);
                    }
                }
            }
        }
    }
    return 0;
}
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
