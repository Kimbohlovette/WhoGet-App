import { Request, Response } from 'express';
import { Ask } from '../../models/askModel';

export const getAsksByUserId = async (req: Request, res: Response) => {
	const id = req.params['id'];
	if (!id) {
		return res.status(404).json({
			message: 'resource not found',
			success: false,
		});
	}
	try {
		const asks = await Ask.find({ userId: id });
		return res.status(200).json({
			success: true,
			message: 'fetch operation successful',
			asks: asks.map((ask) => ({
				id: ask.id,
				message: ask.message,
				expirationDate: ask.expirationDate,
				location: ask.location,
				imageUrl: ask.imageUrl,
				status: ask.status,
				activities: ask.activities,
				createdAt: ask.createdAt,
			})),
			numOfAsks: asks.length,
		});
	} catch (error) {
		return res.status(422).json({
			success: false,
			message: 'unprocessible',
		});
	}
};
