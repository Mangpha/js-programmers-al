function solution(skill, skill_trees) {
    let count = 0;
    let skilltree = skill_trees.map((trees) => trees.split("").filter((el) => skill.includes(el)));
    skilltree.forEach((element) => {
        let valid = true;
        for (let i = 0; i < element.length; i++) {
            if (element[i] !== skill[i]) valid = false;
        }
        if (valid) count++;
    });
    return count;
}
console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
