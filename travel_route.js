function solution(tickets) {
    tickets.sort();
    const result = [];
    const visited = new Array(tickets.length).fill(false);
    let answer;
    const dfs = (start, count) => {
        result.push(start);
        if (count === tickets.length) {
            answer = result;
            return true;
        }
        for (let i = 0; i < tickets.length; i++) {
            if (!visited[i] && tickets[i][0] === start) {
                visited[i] = true;
                if (dfs(tickets[i][1], count + 1)) return true;
                visited[i] = false;
            }
        }
        result.pop();
        return false;
    };
    dfs("ICN", 0);
    return answer;
}
console.log(
    solution([
        ["ICN", "AOO"],
        ["AOO", "BOO"],
        ["AOO", "COO"],
        ["COO", "AOO"],
        ["BOO", "ZOO"],
    ]),
);
