'use strict';

// returns a random integer in the range [m,n] (inclusive)
function rand(m,n) {
	return m + Math.floor((n - m + 1)*Math.random());
}

// randomly returns a string representing one of the six
//	Crown and Anchor faces
function randFace() {
	return ['crown', 'anchor', 'heart', 'spade', 'club', 'diamond'][rand(0,5)];
}

function walk() {
	return `${this.name}, Ich laufe`;
}

let targetTempC;
let targetTempF;
let funds = 50;
let round = 0;


const ROOM_TEMP_C = 21.5, MAX_TEMP_C = 30;
const INF = Infinity;
const NAN = NaN;

// const RED = Symbol();
// const ORANGE = Symbol('The color of a sunset!');

let student = { 
	name: 'Mike Seatris', 
	level: 'senior', 
	standing: 'advance',
	f: walk,
	k: (fname, lname) => `Wie gehts ${fname} ${lname}`,
	speak() {
		return this.name;
	} 
};

let {name, level, standing} = student;
const handDemo = [randFace(), randFace(), randFace()];

xt;
var xt = 3;

// using a function by reference
console.log(`Example of ${student.f()}`);
console.log(student.k('Mike','Seatris'));

console.log('Demonstrating the for..of syntax');
for (let face of handDemo) console.log(`You rolled a ${face}`);

while (funds > 1 && funds < 100) {
	round++;
	console.log(`round ${round}:`);
	console.log(`\tstarting funds: ${funds}p`);
	
	// place bets
	let bets = {crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0};
	let totalBet = rand(1,funds);
	if(new Date().getDay() === 3) {
		totalBet = 1;
		bets.crown = totalBet;
		console.log('It\'s Wednesday and We are superstition.'); 
	} else if (totalBet === 7) {
		totalBet = funds;
		bets.heart = totalBet;
	} else {
		let remaining = totalBet;
		do {
			let bet = rand(1, remaining);
			let face = randFace();
			bets[face] = bets[face] + bet;
			remaining = remaining - bet;
		} while(remaining > 0);
	}
	funds = funds - totalBet;
	console.log('\tbets: ' + Object.keys(bets).map(face => `${face}: ${bets[face]} pence`).join(', ') +
		` (total: ${totalBet} pence)`);

	// roll dice
	const hand = [];
	for(let roll = 0; roll < 3; roll++) {
		hand.push(randFace());
	}
	console.log(`\thand: ${hand.join(', ')}`);
	
	// collect winnings
	let winnings = 0;
	for( let die = 0; die < hand.length; die++) {
		let face = hand[die];
		if (bets[face] > 0) winnings = winnings + bets[face];
	}
	funds = funds + winnings;
	console.log(`\twinnings: ${winnings}`);
}
console.log(`\tending funds: ${funds}`);

targetTempC = ROOM_TEMP_C;
if (targetTempC < MAX_TEMP_C) {
	targetTempF = targetTempC * 9 / 5 + 32;
	console.log(`Die Raumtemperatur ist ${targetTempC}C und ${targetTempF}F und kein ${INF} oder ${NAN}`);
	console.log(`Wie bist du? Ich bin ${student.speak()}`);
}

