import { Request, Response } from 'express';
import { Ask } from '../../models/askModel';
export const getAllAsks = async (req: Request, res: Response) => {
	try {
		const asks = (await Ask.find().sort({ _id: -1 })).map((ask) => {
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
		console.log(error);
		return res
			.status(400)
			.json({ success: false, message: 'bad request body' });
	}
};
