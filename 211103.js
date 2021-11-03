// x만큼 간격이 있는 n개의 숫자

function solution(x, n) {
    const ans = [];
    for (let i = 1; i <= n; i++) ans.push(x * i);
    return ans;
}

// 직사각형 별찍기
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
    const n = data.split(" ");
    const a = Number(n[0]),
        b = Number(n[1]);
    let str = "";
    for (let i = 0; i < b; i++) {
        str += "*".repeat(a);
        str += "\n";
    }
    console.log(str);
});
