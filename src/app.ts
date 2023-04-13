import app from './server';
import express from 'express';
import askRoutes from './routes/askRoutes';
import userRoutes from './routes/userRoutes';



app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/asks', askRoutes);
app.use('/api/v1/users', userRoutes);