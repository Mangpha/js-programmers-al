function solution(clothes) {
    const dic = {};
    clothes.forEach((e) => {
        if (dic[e[1]]) dic[e[1]]++;
        else dic[e[1]] = 1;
    });
    let ans = 1;
    for (element in dic) ans *= dic[element] + 1;
    return ans - 1;
}

console.log(
    solution([
        ["yellowhat", "headgear"],
        ["bluesunglasses", "eyewear"],
        ["green_turban", "headgear"],
    ]),
    solution([
        ["crowmask", "face"],
        ["bluesunglasses", "face"],
        ["smoky_makeup", "face"],
    ]),
);
