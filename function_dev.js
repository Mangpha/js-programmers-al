function solution(progresses, speeds) {
    const que = [];
    const result = [];
    let count = 0;
    for (let i = 0; i < progresses.length; i++) {
        let n = parseInt((100 - progresses[i]) / speeds[i]);
        if ((100 - progresses[i]) % speeds[i] > 0) n += 1;
        que.push(n);
    }
    while (que.length > 0) {
        const temp = que.shift();
        count += 1;
        while (temp >= que[0]) {
            que.shift();
            count += 1;
        }
        result.push(count);
        count = 0;
    }
    return result;
}
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
