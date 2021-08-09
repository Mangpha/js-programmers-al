function solution(people, limit) {
    people.sort((a, b) => b - a);
    let count = 0;
    for (let i = 0, j = people.length - 1; i <= j; i++) {
        if (people[i] + people[j] <= limit) j--;
        count++;
    }
    return count;
}
console.log(solution([70, 50, 80, 50], 100));
