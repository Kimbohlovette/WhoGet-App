import { Request, Response } from 'express';
import { Ask } from '../../models/askModel';
import { AskType } from '../../types';
import { User } from '../../models/userModel';

export const getPagenatedAsks = async (req: Request, res: Response) => {
	const PAGE_LIMIT = 10;
	const { limit = PAGE_LIMIT, page = 1 } = req.query;
	const pageNum = Number(page);
	const pageLimit = Number(limit);
	try {
		const asks = (
			await Ask.find({})
				.sort({ createdAt: -1, _id: -1 })
				.skip(pageNum > 0 ? (pageNum - 1) * pageLimit : 0)
				.limit(pageLimit)
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
				userName: ask.userName || '',
				status: ask.status,
				activities: ask.activities,
				contactNumber: ask.contactNumber || '',
			};
		});
		return res.status(200).json({
			success: true,
			message: 'fetch operation succesful',
			asks,
		});
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ success: false, message: 'bad request body' });
	}
};
