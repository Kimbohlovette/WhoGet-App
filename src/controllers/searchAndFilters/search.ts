import { Request, Response } from 'express';
import { Ask } from '../../models/askModel';

export const search = async (req: Request, res: Response) => {
	const searchKey = (req.query['q'] as string).trim();
	const { limit, page } = req.params;

	try {
		const askQuery = await Ask.find({
			$text: { $search: searchKey },
		})
			.sort({ createdAt: 1 })
			.limit(+limit)
			.skip((+page - 1) * 1)
			.sort({ createdAt: -1 });
		const filtered = askQuery.map((ask) => ({
			id: ask._id.toHexString,
			message: ask.message,
			location: ask.location,
			expirationDate: ask.expirationDate,
		}));
		return res.status(200).json({
			success: true,
			asks: filtered,
		});
	} catch (error) {
		console.log(error);
		res.status(200).json({
			success: false,
			asks: [],
		});
	}
};
