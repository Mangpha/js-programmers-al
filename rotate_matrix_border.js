// 행렬 테두리 회전하기
function solution(rows, columns, queries) {
    const ans = [];
    let n = 1;
    const matrix = Array.from(Array(rows), () => Array.from(columns));
    for (let i = 0; i < rows; i++) for (let j = 0; j < columns; j++) matrix[i][j] = n++;
    queries.map((el) => el.map((n, idx) => (el[idx] = n - 1)));
    queries.forEach((query) => {
        const [row1, col1, row2, col2] = query;
        const temp = matrix[row1][col1];
        let min = temp;
        for (let i = row1; i < row2; i++) {
            matrix[i][col1] = matrix[i + 1][col1];
            min = Math.min(matrix[i][col1], min);
        }
        for (let i = col1; i < col2; i++) {
            matrix[row2][i] = matrix[row2][i + 1];
            min = Math.min(matrix[row2][i], min);
        }
        for (let i = row2; i > row1; i--) {
            matrix[i][col2] = matrix[i - 1][col2];
            min = Math.min(matrix[i][col2], min);
        }
        for (let i = col2; i > col1; i--) {
            matrix[row1][i] = matrix[row1][i - 1];
            min = Math.min(matrix[row1][i], min);
        }
        matrix[row1][col1 + 1] = temp;
        ans.push(min);
    });

    return ans;
}

console.log(
    solution(6, 6, [
        [2, 2, 5, 4],
        [3, 3, 6, 6],
        [5, 1, 6, 3],
    ]),
);
