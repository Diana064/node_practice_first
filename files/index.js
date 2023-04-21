const fs = require('fs/promises');
const path = require('path');
// console.log(__dirname);
// console.log(__filename);
// const moviesPath = path.join(__dirname, '../db/movies.json');
const moviesPath = path.join(__dirname, '..', 'db', 'movies.json');
console.log(moviesPath);
const data = [
	{
		Title: 'Avatar',
		Year: '2009',
	},
	{
		Title: 'I Am Legend',
		Year: '2007',
	},
	{
		Title: '300years',
		Year: '2006',
	},
];

class FileOperations {
	constructor(moviesPath) {
		this.moviesPath = moviesPath;
	}
	showAll = async () => {
		const data = await fs.readFile(this.moviesPath, 'utf-8');
		console.log(data);
		return data;
	};
	create = async (data) => {
		await fs.writeFile(this.moviesPath, JSON.stringify(data));
	};
	update = async (newMovie) => {
		await fs.appendFile(this.moviesPath, JSON.stringify(newMovie, null, 4));
	};
	remove = async () => {
		await fs.unlink(this.moviesPath);
	};
}
const file = new FileOperations(moviesPath);
// file.showAll();
// file.create(data);
// file.update({ Title: 'Cat', Year: '2002' });
// file.remove();
function asyncHandler(clb, data) {
	try {
		if (data) {
			return clb(data);
		}
		clb();
	} catch (error) {
		console.log(error);
	}
}
// asyncHandler(file.showAll);
asyncHandler(file.update, { Title: 'Cat', Year: '2002' });
