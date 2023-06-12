import express from 'express';
import askRoutes from './routes/askRoutes';
import userRoutes from './routes/userRoutes';
import categoryRoutes from './routes/categoryRoutes';
import searchRoutes from './routes/searchRoutes';
import mongoose from 'mongoose';
import cors from 'cors';
import { verifyAuthToken } from './middlewares/auth';

require('dotenv').config();
const port = process.env.PORT || 5000;
const dbUserName = process.env['MONGODB_NAME'];
const mongodbPwd = process.env['MONGODB_PWD'];
const mongodbAppName = process.env['MONGODB_APPNAME'];
const mongodbDatabaseName = process.env['MONGODB_DBNAME'];

const mongoConnectionPath = `mongodb+srv://${dbUserName}:${mongodbPwd}@${mongodbAppName}.mongodb.net/${mongodbDatabaseName}?retryWrites=true&w=majority`;

const app = express();
mongoose
	.connect(mongoConnectionPath)
	.then(() => {
		app.listen(port, () => {
			console.log(`Listening on port ${port}...`);
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
app.use('/api/v1/search', searchRoutes);
