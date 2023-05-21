import { Request, Response } from 'express';
import { Ask } from '../../models/askModel';

export const filterAsks = async (req: Request, res: Response) => {
	const category = req.query.category;
	const location = req.query.location;
	const expiresIn = req.query.expires;
	try {
		const asks = (await Ask.find({ categoryId: category, location }))
			.filter(
				(ask) =>
					ask.expirationDate.getDate() ===
					new Date().getDate() + Number(expiresIn)
			)
			.map((ask) => {
				return {
					id: ask._id.toHexString(),
					message: ask.message,
					expirationDate: ask.expirationDate.toDateString(),
					createdAt: ask.createdAt.toDateString(),
					locaton: ask.location,
					imageUrl: ask.imageUrl,
					categoryId: ask.categoryId,
					userId: ask.userId,
					userName: ask.userName || '',
					activities: ask.activities,
					contactNumber: ask.contactNumber || '',
				};
			});
		return res.status(200).json({
			success: true,
			asks,
		});
	} catch (error) {
		console.log;
		return res.status(499).json({
			message: 'error_processing_filter',
			success: false,
		});
	}
};
