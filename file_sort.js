function solution(files) {
    return files.sort((a, b) => {
        const Ahead = a.slice(0, a.match(/[0-9]+/).index).toLowerCase();
        const Bhead = b.slice(0, b.match(/[0-9]+/).index).toLowerCase();
        const Anum = +a.match(/[0-9]+/)[0];
        const Bnum = +b.match(/[0-9]+/)[0];
        if (Ahead < Bhead) return -1;
        else if (Ahead > Bhead) return 1;
        else if (Anum < Bnum) return -1;
        else if (Anum > Bnum) return 1;
        else return 0;
        // return Ahead < Bhead ? -1 : Ahead > Bhead ? 1 : Anum < Bnum ? -1 : Anum > Bnum ? 1 : 0;
    });
}

console.log(
    solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]),
);
