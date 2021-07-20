function solution(n, edge) {
    const bfs = (arr, start, end) => {
        const visited = Array(end + 1).fill(false);
        const len = Array(end + 1).fill(0);
        const que = [start];
        visited[start] = true;
        while (que.length > 0) {
            const tmp = que.shift();
            const l = len[tmp] + 1;
            for (let node of arr) {
                if (node[0] === tmp && !visited[node[1]]) {
                    que.push(node[1]);
                    visited[node[1]] = true;
                    len[node[1]] = l;
                } else if (node[1] === tmp && !visited[node[0]]) {
                    que.push(node[0]);
                    visited[node[0]] = true;
                    len[node[0]] = l;
                }
            }
        }
        const max = Math.max(...len);
        return len.filter((el) => el === max).length;
    };
    return bfs(edge, 1, n);
}
console.log(
    solution(6, [
        [3, 6],
        [4, 3],
        [3, 2],
        [1, 3],
        [1, 2],
        [2, 4],
        [5, 2],
    ]),
);
