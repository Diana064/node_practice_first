// sum +
// sub -
// mult *
// div /
// node calc.js sum 2 5 25 = 32
// node calc.js mult 2 5 4 = 40
// console.log(process.argv);
// const data = process.argv.slice(2);
// console.log(data);
// const typeOfCalc = data[0];
// console.log(typeOfCalc);
// const numbers = process.argv.slice(3);
// console.log(numbers);
const [operation, ...data] = process.argv.slice(2);
const numbers = data.map((item) => Number(item));

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

console.log(calc(operation, numbers));
