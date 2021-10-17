function solution(m, n, board) {
    let ans = 0;
    board = board.map((el) => el.split(""));
    const check2x2 = (a, b, board) =>
        board[a][b] === board[a][b + 1] &&
        board[a][b] === board[a + 1][b] &&
        board[a][b] === board[a + 1][b + 1];
    const unique = (array) => {
        const u = [];
        const found = {};
        for (let i = 0; i < array.length; i++) {
            if (found[JSON.stringify(array[i])]) continue;
            u.push(array[i]);
            found[JSON.stringify(array[i])] = true;
        }
        return u;
    };
    const find2x2 = (board) => {
        const list = [];
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                if (check2x2(i, j, board) && board[i][j] !== 0) {
                    list.push([i, j]);
                    list.push([i + 1, j]);
                    list.push([i + 1, j + 1]);
                    list.push([i, j + 1]);
                }
            }
        }
        return unique(list);
    };
    while (1) {
        const lists = find2x2(board);
        if (lists.length === 0) return ans;
        lists.forEach((list) => (board[list[0]][list[1]] = 0));
        ans += lists.length;
        const newBoard = [];
        for (let i = 0; i < n; i++) {
            const temp = [];
            for (let j = 0; j < m; j++) {
                if (board[j][i] !== 0) temp.push(board[j][i]);
            }
            newBoard.push(temp);
        }
        newBoard.map((el) => {
            while (el.length < m) el.unshift(0);
        });
        for (let i = m - 1; i >= 0; i--) {
            for (let j = n - 1; j >= 0; j--) board[i][j] = newBoard[j][i];
        }
    }
}

console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]));
