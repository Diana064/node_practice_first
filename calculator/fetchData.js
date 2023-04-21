const [operation, ...data] = process.argv.slice(2);
const numbers = data.map((item) => Number(item));
module.exports = {
	operation,
	numbers,
};
