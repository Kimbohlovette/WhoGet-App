import { Request, Response } from 'express';

export const getAsksByCategory = async (req: Request, res: Response) => {
	res.status(200).json({
		success: true,
		message: 'delete operation successful',
	});
};