import { Request, Response } from 'express';
import { Ask } from '../../models/askModel';
export const getPagenatedAsks = async (req: Request, res: Response) => {
	const page = req.query.page;
	const limit = req.query.limit;
	const pageNum = page ? Number(page) : 1;
	const pageLimit = limit ? Number(limit) : 15;
	try {
		const asks = (
			await Ask.find({ status: 'visible' })
				.sort({ _id: -1 })
				.skip(pageNum > 0 ? (pageNum - 1) * pageLimit : 0)
				.limit(pageLimit)
		).map((ask) => {
			return {
				id: ask._id.toHexString(),
				message: ask.message,
				expirationDate: ask.expirationDate?.toDateString(),
				createdAt: ask.createdAt.toDateString(),
				locaton: ask.location,
				imageUrl: ask.imageUrl,
				categoryId: ask.categoryId,
				userId: ask.userId,
				userName: ask.userName || '',
				activities: ask.activities,
				contactNumber: ask.contactNumber || '',
				status: ask.status,
			};
		});
		return res.status(200).json({
			success: true,
			message: 'fetch operation succesful',
			asks,
			size: asks.length,
		});
	} catch (error) {
		return res
			.status(400)
			.json({ success: false, message: 'bad request body' });
	}
};
