const calc = (op, numbersArr) => {
	let total = null;
	switch (op) {
		case 'sum':
			total = numbersArr.reduce((acc, elem) => acc + elem);
			break;
		case 'sub':
			total = numbersArr.reduce((acc, elem) => acc - elem);
			break;
		case 'mult':
			total = numbersArr.reduce((acc, elem) => acc * elem);
			break;
		case 'div':
			total = numbersArr.reduce((acc, elem) => acc / elem);
			break;
		default:
			total = 'unknown operation type';
	}
	return total;
};
module.exports = calc;
