import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose
	.connect(
		'mongodb+srv://kimbohlovette:CqaluLRZNBZNKrmS@fitnesscoachdb.8a1ynfl.mongodb.net/who-get?retryWrites=true&w=majority'
	)
	.then(() => {
		app.listen(5000, () => {
			console.log('Listening on port 5000....');
		});
	})
	.catch((error) => {
		console.log(error);
	});

export default app;
