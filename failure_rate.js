function solution(N, stages) {
    let user = {};
    for (let i = 1; i <= N + 1; i++) user[i] = 0;
    // stages에 도달한 사람들을 객체 형태로 변환
    stages.forEach((element) => (user[element] += 1));
    let delUser = 0;
    let copy = { ...user };
    for (let i = 0; i < N; i++) {
        delUser += copy[i + 1];
        user[i + 1] = user[i + 1] / (stages.length - delUser);
    }
    delete user[N + 1];
    return Array.from(
        Object.keys(user).sort((a, b) => user[b] - user[a]),
        (x) => Number(x),
    );
}
console.log(solution(4, [4, 4, 4, 4, 4]));
