const game = {
    team1: 'Việt Nam',
    team2: 'Lào',
    players: [
        [
            'Đặng Văn Lâm',
            'Đoàn Văn Hậu',
            'Bùi Tiến Dũng',
            'Bùi Văn Thanh',
            'Quang ramboo',
            'Nguyễn Công Phượng',
            'Nguyễn Tuấn Anh',
            'Bùi Toàn Long',
            'Nguyễn Quang Hải',
            'Nguyễn Tiến Linh',
            'Nguyễn Duy Mạnh',
        ],
        [
            'Quỳnh',
            'Nam per',
            'Lê Bảo',
            'Hải lỏ',
            'Hiểu bến tàu',
            'Quang cuốn',
            'Công Linh',
            'Trường',
            'Mạnh',
            'Kiên',
            'Tùng',
        ],
    ],
    score: '4:0',
    scored: ['Lương Xuân Trường', 'Nguyễn Quang Hải', 'Bùi Tiến Dũng', 'Nguyễn Tiến Linh'],
    date: ' Nov 9th, 2023',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    }
};
//.1
const [players1, players2] = game.players;
console.log(players1, players2);
//.2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
//.3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//.4
const players1Final = [...players1, ...players2];
console.log(players1Final);
//.5
const { odds: { team1, x, team2 } } = game;
console.log(team1, x, team2);
//.6
const printGoal = function(...players){
    console.log(players);
    console.log(`${players.length} goals were scored`);
}
// printGoal('Davies', 'Muller', 'Lewandowski' , 'Kimmich');
// printGoal('Davies', 'Muller');
printGoal (...game.scored);
//.7
team1 < team2 && console.log('team 1 is more  likeky to win');
team1 > team2 && console.log('team 2 is more  likeky to win');