class CalculatorOop {
	constructor(operation, numbers) {
		this.operation = operation;
		this.numbers = numbers;
	}
	init = () => {
		return this.calc(this.operation, this.numbers);
	};
	calc = (op, numbersArr) => {
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
}
const [operation, ...data] = process.argv.slice(2);
const numbers = data.map((item) => Number(item));
module.exports = new CalculatorOop(operation, numbers);
