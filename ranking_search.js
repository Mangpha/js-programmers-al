function solution(info, query) {
    const answer = [];
    const dic = {};
    for (let lan of ["java", "python", "cpp", "-"])
        for (let pos of ["backend", "frontend", "-"])
            for (let car of ["junior", "senior", "-"])
                for (let food of ["pizza", "chicken", "-"]) dic[lan + pos + car + food] = [];

    info.forEach((i) => {
        i = i.split(" ");
        for (let lan of [i[0], "-"])
            for (let pos of [i[1], "-"])
                for (let car of [i[2], "-"])
                    for (let food of [i[3], "-"]) dic[lan + pos + car + food].push(i[4]);
    });

    for (let key of Object.keys(dic))
        dic[key] = dic[key].sort((a, b) => a - b).map((e) => Number(e));

    query.forEach((q) => {
        q = q.replace(/\sand\s/g, "").split(" ");
        const sorted = dic[q[0]];
        let low = 0;
        let high = sorted.length - 1;
        let temp = sorted.length;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (q[1] <= sorted[mid]) {
                temp = mid;
                high = mid - 1;
            } else low = mid + 1;
        }
        answer.push(sorted.length - temp);
    });
    return answer;
}

console.log(
    solution(
        [
            "java backend junior pizza 150",
            "python frontend senior chicken 210",
            "python frontend senior chicken 150",
            "cpp backend senior pizza 260",
            "java backend junior chicken 80",
            "python backend senior chicken 50",
        ],
        [
            "java and backend and junior and pizza 100",
            "python and frontend and senior and chicken 200",
            "cpp and - and senior and pizza 250",
            "- and backend and senior and - 150",
            "- and - and - and chicken 100",
            "- and - and - and - 150",
        ],
    ),
);
