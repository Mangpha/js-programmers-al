function solution(n, arr1, arr2) {
    const binaryMap = [];
    const ans = [];
    for (let i = 0; i < n; i++) {
        binaryMap[i] = (arr1[i] | arr2[i]).toString(2);
    }
    binaryMap.forEach((el) => {
        let str = "";
        if (el.length < n) {
            for (let i = 0; i < n - el.length; i++) str += " ";
        }
        for (let i = 0; i < el.length; i++) {
            if (!!Number(el[i])) str += "#";
            else str += " ";
        }
        ans.push(str);
    });
    return ans;
}
console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
