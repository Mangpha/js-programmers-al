function solution(record) {
    const enter = (username) => `${username}님이 들어왔습니다.`;
    const leave = (username) => `${username}님이 나갔습니다.`;
    const users = [];
    const result = [];
    record.forEach((element) => {
        const [cmd, uid, username] = element.split(" ");
        if (cmd === "Enter" || cmd === "Change") users[uid] = username;
    });
    record.forEach((element) => {
        const [cmd, uid, username] = element.split(" ");
        if (cmd === "Enter") result.push(enter(users[uid]));
        else if (cmd === "Leave") result.push(leave(users[uid]));
    });
    return result;
}
console.log(
    solution([
        "Enter uid1234 Muzi",
        "Enter uid4567 Prodo",
        "Leave uid1234",
        "Enter uid1234 Prodo",
        "Change uid4567 Ryan",
    ]),
);
