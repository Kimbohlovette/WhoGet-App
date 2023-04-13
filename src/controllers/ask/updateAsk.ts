import {Request, Response } from 'express';

export const updateAsk = async (req: Request, res: Response) => {
	return res
		.status(201)
		.json({ success: true, message: 'update operation successful' });
};
