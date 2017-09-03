'use strict';

// returns a random integer in the range [m,n] (inclusive)

function rand(m, n) {
	return m + Math.floor((n - m + 1) * Math.random());
}

// randomly returns a string representing one of the six
//	Crown and Anchor faces
function randFace() {
	return ['crown', 'anchor', 'heart', 'spade', 'club', 'diamond'][rand(0, 5)];
}

function walk() {
	return this.name + ', Ich laufe';
}

var targetTempC = void 0;
var targetTempF = void 0;
var funds = 50;
var round = 0;

var ROOM_TEMP_C = 21.5,
    MAX_TEMP_C = 30;
var INF = Infinity;
var NAN = NaN;

// const RED = Symbol();
// const ORANGE = Symbol('The color of a sunset!');

var student = {
	name: 'Mike Seatris',
	level: 'senior',
	standing: 'advance',
	f: walk,
	k: function k(fname, lname) {
		return 'Wie gehts ' + fname + ' ' + lname;
	},
	speak: function speak() {
		return this.name;
	}
};

var name = student.name,
    level = student.level,
    standing = student.standing;

var handDemo = [randFace(), randFace(), randFace()];

// using a function by reference
console.log('Example of ' + student.f());
console.log(student.k('Mike', 'Seatris'));

console.log('Demonstrating the for..of syntax');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = handDemo[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var face = _step.value;
		console.log('You rolled a ' + face);
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}

var _loop = function _loop() {
	round++;
	console.log('round ' + round + ':');
	console.log('\tstarting funds: ' + funds + 'p');

	// place bets
	var bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0 };
	var totalBet = rand(1, funds);
	if (new Date().getDay() === 3) {
		totalBet = 1;
		bets.crown = totalBet;
		console.log('It\'s Wednesday and We are superstition.');
	} else if (totalBet === 7) {
		totalBet = funds;
		bets.heart = totalBet;
	} else {
		var remaining = totalBet;
		do {
			var bet = rand(1, remaining);
			var _face = randFace();
			bets[_face] = bets[_face] + bet;
			remaining = remaining - bet;
		} while (remaining > 0);
	}
	funds = funds - totalBet;
	console.log('\tbets: ' + Object.keys(bets).map(function (face) {
		return face + ': ' + bets[face] + ' pence';
	}).join(', ') + (' (total: ' + totalBet + ' pence)'));

	// roll dice
	var hand = [];
	for (var roll = 0; roll < 3; roll++) {
		hand.push(randFace());
	}
	console.log('\thand: ' + hand.join(', '));

	// collect winnings
	var winnings = 0;
	for (var die = 0; die < hand.length; die++) {
		var _face2 = hand[die];
		if (bets[_face2] > 0) winnings = winnings + bets[_face2];
	}
	funds = funds + winnings;
	console.log('\twinnings: ' + winnings);
};

while (funds > 1 && funds < 100) {
	_loop();
}
console.log('\tending funds: ' + funds);

targetTempC = ROOM_TEMP_C;
if (targetTempC < MAX_TEMP_C) {
	targetTempF = targetTempC * 9 / 5 + 32;
	console.log('Die Raumtemperatur ist ' + targetTempC + 'C und ' + targetTempF + 'F und kein ' + INF + ' oder ' + NAN);
	console.log('Wie bist du? Ich bin ' + student.speak());
}