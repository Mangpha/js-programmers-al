function solution(expression) {
    let max = 0;
    const cmd = [
        ["+", "-", "*"],
        ["+", "*", "-"],
        ["-", "*", "+"],
        ["-", "+", "*"],
        ["*", "+", "-"],
        ["*", "-", "+"],
    ];
    const numbers = expression.split(/\D/);
    const symbols = expression.split(/\d/).filter((el) => el.length !== 0);
    cmd.forEach((symbol) => {
        let idx = 0;
        let nums = [...numbers];
        let syms = [...symbols];
        while (1) {
            for (let i = 0; i < syms.length; i++) {
                if (syms[i] === symbol[idx]) {
                    nums[i] = eval(nums[i] + syms[i] + nums[i + 1]);
                    nums.splice(i + 1, 1);
                    syms.splice(i, 1);
                    i--;
                }
            }
            idx++;
            if (nums.length === 1) break;
        }
        max = Math.abs(nums[0]) > max ? Math.abs(nums[0]) : max;
    });
    return max;
}
const test1 = solution("100-200*300-500+20");
console.log(test1);
