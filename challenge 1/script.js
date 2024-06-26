


const game = {
    team1: 'man united',
    team2: 'barca',
    players: [
        ['Neuer', 'Pavard', 'Sule', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Muller', 'Gnabry', 'Lewandowski', 'Coman'],
        ['Ter Stegen', 'Semedo', 'Pique', 'Lenglet', 'Alba', 'Busquets', 'De Jong', 'Messi', 'Suarez', 'Dembele', 'Griezmann'],
    ],
    score: '4:0',
    scored: ['Sule', 'Alaba', 'Davies', 'Kimmich'],
    date: 'november 30 , 2025',
    odds: {
        team1: 1.60,
        x: 4.40,
        team2: 2.80
    },
}

//task 1
const [player1, player2] = game.players;
console.log(player1, player2)

// task 2 
const [gk, ...fieldPlayer] = player1;
console.log(gk, fieldPlayer)

//task 3
const allPlayers = [...player1, ...player2];
console.log(allPlayers)

//task 4 
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic' ]
console.log(players1Final)

//5
const {odds: {team1 , x:draw , team2}} = game;
console.log(team1 , draw , team2)

//task 6
const printGoals = function (...players) {
    console.log(players)
}
printGoals(...game.scored)

// 7
team1 < team2 && console.log('team 1 is win');
team1 > team2 && console.log('team 2 is win');