import express from 'express';
import askRoutes from './routes/askRoutes';
import userRoutes from './routes/userRoutes';
import categoryRoutes from './routes/categoryRoutes';
import mongoose from 'mongoose';
import cors from 'cors';

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

app.use(express.static('./public'));
app.use(express.json());
app.use(
	cors({
		origin: '*',
	})
);

app.use('/api/v1/asks', askRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/categories', categoryRoutes);
