import pkg from 'pg';
const { Client } = pkg;

let DB_URI = 'postgresql:///gfresh';

let db = new Client({
	connectionString: DB_URI,
});

db.connect();

export default db;
