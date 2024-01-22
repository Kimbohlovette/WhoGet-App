import { Request, Response } from 'express';
import { Ask } from '../../models/askModel';

export const getAsksByCategory = async (req: Request, res: Response) => {
	const categoryId = req.params['id'];
	try {
		const asks = (
			await Ask.find({ categoryId: categoryId, status: 'visible' }).sort({
				createdAt: 1,
			})
		).map((ask) => ({
			id: ask._id.toString(),
			message: ask.message,
			expirationDate: ask.expirationDate?.toDateString(),
			createdAt: ask.createdAt.toDateString(),
			locaton: ask.location,
			imageUrl: ask.imageUrl,
			categoryId: ask.categoryId,
			userId: ask.userId,
			userName: ask.userName || '',
			contactNumber: ask.contactNumber || '',
		}));
		return res.status(200).json({
			success: true,
			message: 'fetch asks successful',
			asks: asks,
			numOfAsks: asks.length,
		});
	} catch (error) {
		return res.status(404).json({
			success: false,
			message: 'resource not found',
		});
	}
};
