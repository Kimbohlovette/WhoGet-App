import { Request, Response } from 'express';

export const getAskById = async (req: Request, res: Response) => {
	res.status(200).json({
		success: true,
		message: 'get ask operation successful',
        ask: null,
	});
};