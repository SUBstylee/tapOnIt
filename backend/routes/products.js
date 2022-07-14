import express from 'express';
const router = express.Router();
import db from '../db.js';

router.get('/', async (req, res, next) => {
	try {
		const results = await db.query(`SELECT * FROM products`);
		return res.json(results.rows);
	} catch (e) {
		return next(e);
	}
});
router.get(`/:id`, async (req, res, next) => {
	try {
		const ID = req.params.id;
		const results = await db.query(`SELECT * FROM products WHERE id=$1`, [ID]);
		return res.json(results.rows);
	} catch (e) {
		return next(e);
	}
});

export default router;
