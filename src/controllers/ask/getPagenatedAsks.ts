import { Request, Response } from 'express';

export const getPagenatedAsks = async (req: Request, res: Response) => {
	res.status(200).json({
		success: true,
		message: 'get ask operation successful',
        asks: []
	});
};
