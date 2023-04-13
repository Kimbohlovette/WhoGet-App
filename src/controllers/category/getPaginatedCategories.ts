import { Request, Response } from 'express';

export const getPaginatedCategories = async (req: Request, res: Response) => {
	return res.status(200).json({
		success: true,
		message: 'delete operation successful',
	});
};
