function solution(orders, course) {
    const answer = [];
    const getComb = (str, num) => {
        str = Array.from(str);
        const result = [];
        if (num === 1) return str.map((el) => [el]);
        str.forEach((fix, idx, origin) => {
            const rest = origin.slice(idx + 1);
            const comb = getComb(rest, num - 1);
            const atth = comb.map((el) => [fix, ...el]);
            result.push(...atth);
        });
        return result;
    };
    course.forEach((num) => {
        const comb = [];
        orders.forEach((order) => {
            const getCombArr = getComb(order, num);
            getCombArr.map((str) => str.sort().join("")).forEach((string) => comb.push(string));
        });
        const map = new Map();
        for (let combination of comb)
            map.set(combination, map.has(combination) ? map.get(combination) + 1 : 1);
        let max = Math.max(...map.values());
        for (let data of map) if (data[1] === max && max !== 1) answer.push(data[0]);
    });
    return answer.sort();
}
console.log(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]));
