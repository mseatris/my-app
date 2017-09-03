'use strict';
// es6 feature: block-scoped "let" declaration
const SENTENCES = [
	{ subject: 'Javascript', verb: 'ist', object: 'toll'},
	{ subject: 'Elefante', verb: 'sind', object: 'hoch'},
];
// es6 feature: object destructing
function say({subject, verb, object }) {
	// es6 feature: template strings
	// note that quotes below are backticks (`), not single quotes (')
	console.log(`${subject} ${verb} ${object}`);
}

// es6 feature: for..of
for(let s of SENTENCES) {
	say(s);
}