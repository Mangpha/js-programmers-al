// 베스트앨범

function solution(genres, plays) {
    const list_map = {};
    const genre_count = {};
    const answer = [];

    genres.forEach((genre, idx) => {
        if (list_map[genre]) list_map[genre].push([idx, plays[idx]]);
        else {
            list_map[genre] = [[idx, plays[idx]]];
            genre_count[genre] = 0;
        }
    });
    for (let genre in list_map) {
        for (let count of list_map[genre]) genre_count[genre] += count[1];
    }
    const count = Object.fromEntries(Object.entries(genre_count).sort(([, a], [, b]) => b - a));
    for (let genre in count) {
        const song_sort = list_map[genre].sort(([, a], [, b]) => b - a);
        song_sort.forEach((song, idx) => {
            if (idx >= 2) return false;
            answer.push(song[0]);
        });
    }

    return answer;
}

// console.log(
//     solution(
//         ["classic", "pop", "classic", "classic", "classic", "pop"],
//         [500, 600, 900, 500, 800, 2500],
//     ),
// );
