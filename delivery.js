function solution(N, road, K) {
    const visit = Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
    const graph = Array(N + 1)
        .fill()
        .map(() => Array());
    road.forEach((el) => {
        let [from, to, count] = el;
        graph[from].push({ to, count });
        graph[to].push({ to: from, count });
    });
    const que = [{ to: 1, count: 0 }];
    visit[1] = 0;
    while (que.length) {
        const { to, count } = que.pop();
        graph[to].forEach((el) => {
            if (visit[el.to] > visit[to] + el.count) {
                visit[el.to] = visit[to] + el.count;
                que.push(el);
            }
        });
    }
    return visit.slice(1).filter((el) => el <= K).length;
}

console.log(
    solution(
        5,
        [
            [1, 2, 1],
            [2, 3, 3],
            [5, 2, 2],
            [1, 4, 2],
            [5, 3, 1],
            [5, 4, 2],
        ],
        3,
    ),
);
