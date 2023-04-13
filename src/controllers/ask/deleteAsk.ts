import { Request, Response } from 'express';

export const deleteAsk = async (req: Request, res: Response) => {
	res.status(200).json({
		success: true,
		message: 'delete operation successful',
	});
};
