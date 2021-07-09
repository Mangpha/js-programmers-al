function solution(n, computers) {
    const isVisited = new Array(n).fill(false);
    let count = 0;
    const dfs = (idx) => {
        isVisited[idx] = true;
        for (let i = 0; i < computers.length; i++) {
            if (!isVisited[i] && computers[idx][i] === 1) dfs(i);
        }
    };
    for (let i = 0; i < isVisited.length; i++) {
        if (!isVisited[i]) {
            dfs(i);
            count += 1;
        }
    }
    return count;
}
console.log(
    solution(3, [
        [1, 1, 0],
        [1, 1, 1],
        [0, 1, 1],
    ]),
);
