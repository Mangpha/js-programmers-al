function solution(priorities, location) {
    let ans = 0;
    let maps = priorities.map((prio, idx) => [prio, idx]);
    let dum = [];
    for (let i = 0; i < priorities.length; ) {
        let tmp = maps.shift();
        if (maps.some((el) => tmp[0] < el[0])) maps.push(tmp);
        else {
            dum.push(tmp);
            if (dum[ans][1] === location) break;
            else ans += 1;
        }
    }

    return ans + 1;
}

console.log(solution([2, 1, 3, 2], 2));
