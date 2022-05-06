function solution(A, B) {
    A = A.sort((a, b) => a - b);
    B = B.sort((a, b) => b - a);
    return A.reduce((el, i, idx) => (el += i * B[idx]), 0);
}
// console.log(solution([1, 4, 2], [5, 4, 4]));

function solution(board) {
    let ans = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (i && j && board[i][j] === 1)
                board[i][j] = Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]) + 1;
            ans = Math.max(ans, board[i][j]);
        }
    }
    return ans ** 2;
}
console.log(
    solution([
        [0, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [0, 0, 1, 0],
    ]),
);
