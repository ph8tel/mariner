let sentiment = require('sentiment');


let programWords = {
	'blew': -3,
	'blows': -3,
	'sick': 3
}

let preDefine = () => {
	sentiment('', programWords, console.log('this was called'));

}

module.exports = preDefine