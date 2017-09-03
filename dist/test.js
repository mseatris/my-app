'use strict';
// es6 feature: block-scoped "let" declaration

var SENTENCES = [{ subject: 'Javascript', verb: 'ist', object: 'toll' }, { subject: 'Elefante', verb: 'sind', object: 'hoch' }];
// es6 feature: object destructing
function say(_ref) {
	var subject = _ref.subject,
	    verb = _ref.verb,
	    object = _ref.object;

	// es6 feature: template strings
	// note that quotes below are backticks (`), not single quotes (')
	console.log(subject + ' ' + verb + ' ' + object);
}

// es6 feature: for..of
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = SENTENCES[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var s = _step.value;

		say(s);
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