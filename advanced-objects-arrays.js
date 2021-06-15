//The exercise asks to create an object as a team with players and games with 3 pairs of propreties for each:
const team = {
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 20
    },
    {
      firstName: 'Juan',
      lastName: 'Morales',
      age: 23
    },
    {
      firstName: 'Carlos',
      lastName: 'Frantchesco',
      age: 22
    }
  ],
  _games: [
    {
      opponent: 'Bolands',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Cofee Team',
      teamPoints: 60,
      opponentPoints: 30
    },
    {
      opponent: 'Cabbaleros',
      teamPoints: 30,
      opponentPoints: 50
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
//Than asks to create methods for the objects to add players and matches for each correspondent array
  addPlayer (newFirstName, newLastName, newAge) {
    const newPlayer = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this._players.push(newPlayer);
  },
  addGame (newOpp, newTeamScore, newOppScore) {
    const newGame = {
      opponent: newOpp,
      teamPoints: newTeamScore,
      opponentPoints: newOppScore
    };
    this._games.push(newGame);
  }
};
//Now adding players and games to populate the object
team.addPlayer ('Steph', 'Curry', 28);
team.addPlayer ('Lisa', 'Leslie', 44);
team.addPlayer ('Bugs', 'Bunny', 76);

team.addGame ('Huges', 30, 60);
team.addGame ('Forks', 20, 20);
team.addGame ('Bees', 40, 15);
//Now the exercise is free you can choose which stat you want to create and log
console.log('Check below for a full matches stats for the team:');
//For games stats I used a loop trough the object array comparing points for each match:
for (let i = 0; i < team._games.length; i++){
  if (team._games[i].teamPoints > team._games[i].opponentPoints) {
    console.log(`Team won with ${team._games[i].teamPoints} vs ${team._games[i].opponentPoints} from the ${team._games[i].opponent}`)
  } else if (team._games[i].teamPoints === team._games[i].opponentPoints) {
    console.log (`The match against ${team._games[i].opponent} was a draw`)
  } else { console.log(`Team has lose by ${team._games[i].opponentPoints - team._games[i].teamPoints} points from ${team._games[i].opponent}`)}
};
console.log('');
//The next stats was just a calculation of team current avg age:
const calcTeamAvgAge = () => {
  let age = 0;
  for (let i = 0; i < team._players.length; i++) {
    age += team._players[i].age;
  };
  console.log(`The team average age is ${age / team._players.length}`)
};
calcTeamAvgAge();
console.log('');
//And to finalize the exercise, I chose a won ratio as stat:
const wonStats = () => {
  let totalWons = 0;
  for (let i = 0; i < team._games.length; i++) {
    if (team._games[i].teamPoints > team._games[i].opponentPoints) {
      totalWons += 1
      };
  };
  let wonRatio = totalWons / team._games.length;
  console.log(`The team already won ${totalWons} matches this year, with a total of ${team._games.length} matches played, which represents a ${wonRatio} win ratio`)
  };

wonStats();

