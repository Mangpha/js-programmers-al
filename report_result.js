function solution(id_list, report, k) {
    const report_lists = [];
    const report_id = {};
    const ans = {};
    report.forEach((id) => {
        const [id1, id2] = id.split(" ");
        report_lists.push([id1, id2]);
    });

    const dup = [...new Set(report_lists.join(" ").split(" "))].map((e) => e.split(","));
    dup.forEach((el) => {
        if (report_id[el[1]]) report_id[el[1]].push(el[0]);
        else report_id[el[1]] = [el[0]];
    });
    for (id in report_id) {
        if (report_id[id].length >= k) {
            report_id[id].forEach((el) => {
                if (ans[el]) ans[el]++;
                else ans[el] = 1;
            });
        }
    }
    return id_list.map((el) => ans[el] || 0);
}

console.log(
    solution(
        ["muzi", "frodo", "apeach", "neo"],
        ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
        2,
    ),
);
// console.log(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3));
