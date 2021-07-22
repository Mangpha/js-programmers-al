function solution(str1, str2) {
    const getSubset = (str) => {
        str = str.toLowerCase().split("");
        let getStr = [];
        for (let i = 1; i < str.length; i++) getStr.push(str[i - 1] + str[i]);
        let res = getStr.filter((el) => new RegExp(/[a-z]{2}/gi).test(el));
        console.log(res);
        return res;
    };
    str1 = getSubset(str1);
    str2 = getSubset(str2);
    let set = new Set([...str1, ...str2]);
    let union = 0;
    let intersection = 0;
    set.forEach((element) => {
        const filter1 = str1.filter((el) => el === element).length;
        const filter2 = str2.filter((el) => el === element).length;
        union += filter1 > filter2 ? filter1 : filter2;
        intersection += filter1 <= filter2 ? filter1 : filter2;
    });
    return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}
console.log(solution("aa1+aa2", "AAAA12"));
