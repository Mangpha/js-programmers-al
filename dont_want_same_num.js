function solution(arr) {
    const ans = [arr[0]];
    arr.forEach((element) => {
        if (ans[ans.length - 1] !== element) ans.push(element);
    });
    return ans;
}
console.log(solution([1, 1, 3, 3, 0, 1, 1]));
