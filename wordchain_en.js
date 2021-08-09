function solution(n, words) {
    let last = words[0][words[0].length - 1];
    for (let i = 1; i < words.length; i++) {
        let getFirst = words[i][0];
        let getLast = words[i][words[i].length - 1];
        let peopleNum = (i + 1) % n === 0 ? n : (i + 1) % n;
        let countWords = Math.ceil((i + 1) / n);
        if (last !== getFirst) return [peopleNum, countWords];
        else if (words.slice(0, i).includes(words[i])) return [peopleNum, countWords];
        last = getLast;
    }
    return [0, 0];
}
console.log(
    solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]),
);
