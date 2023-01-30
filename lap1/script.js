const game={
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

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, ...players2];
console.log(players1Final);

const {} = game
