import express from 'express';
const app = express();
import { ExpressError } from './expressError.js';

app.use(express.json());

import pRoutes from './routes/products.js';
app.use('/products', pRoutes);

app.use(function (req, res, next) {
	const err = new ExpressError('Not Found', 404);
	return next(err);
});

app.use(function (err, req, res, next) {
	const status = err.status || 500;
	const message = err.message;

	return res.status(status).json({
		error: { message, status },
	});
});

app.listen(5000, () => {
	console.log('Server started on port 5000');
});

export default app;
