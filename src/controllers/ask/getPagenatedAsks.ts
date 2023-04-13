import { Request, Response } from 'express';
import { Ask } from '../../models/askModel';
import { AskType } from '../../types';

export const getPagenatedAsks = async (req: Request, res: Response) => {
	const PAGE_LIMIT = 10;
	const { limit = PAGE_LIMIT, page = 1 } = req.query;
	try {
		const asks: AskType[] = (
			await Ask.find({}).limit(+limit).skip(((+page-1)*1))
		).map((ask) => {
			return {
				id: ask._id.toString(),
				message: ask.message,
				expirationDate: ask.expirationDate.toDateString(),
				createdAt: ask.createdAt.toDateString(),
				locaton: ask.location,
				imageUrl: ask.imageUrl,
				categoryId: ask.categoryId,
				userId: ask.userId,
			};
		});
		return res.status(200).json({
			success: true,
			message: 'get ask operation succesful',
			asks,
		});
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ success: false, message: 'bad request body' });
	}
};
