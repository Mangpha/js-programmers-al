function solution(dirs) {
    let pos = [0, 0];
    const cmd = {
        U: [1, 0],
        D: [-1, 0],
        R: [0, 1],
        L: [0, -1],
    };
    const visited = new Set();
    for (let i = 0; i < dirs.length; i++) {
        let row = pos[0] + cmd[dirs[i]][0];
        let col = pos[1] + cmd[dirs[i]][1];
        if (row > 5 || col > 5 || row < -5 || col < -5) continue;
        const nextPos = [row, col];
        if (visited.has(`${nextPos},${pos}`)) {
            pos = nextPos;
            continue;
        }
        visited.add(`${pos},${nextPos}`);
        pos = [row, col];
    }
    return visited.size;
}

console.log(solution("UDU"));
