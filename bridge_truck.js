function solution(bridge_length, weight, truck_weights) {
    const que = Array(bridge_length).fill(0);
    let result = 0;
    while (que.length > 0) {
        que.shift();
        result++;
        if (truck_weights.length > 0) {
            let sum = que.reduce((i, el) => (i += el), 0);
            if (sum + truck_weights[0] <= weight) {
                que.push(truck_weights.shift());
            } else {
                que.push(0);
            }
        }
    }
    return result;
}
console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
