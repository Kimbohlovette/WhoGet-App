import { Request, Response } from 'express';
import { Ask } from '../../models/askModel';

export const getAskById = async (req: Request, res: Response) => {
	const id = req.params['id'];
	if (!id) {
		return res.status(400).json({
			success: false,
			message: 'the request params is not valid',
		});
	}
	try {
		const ask = await Ask.findById(id);
		if (!ask) {
			return res.status(404).json({
				success: false,
				message: 'resource not found',
			});
		} else {
			return res.status(200).json({
				success: true,
				message: 'get ask operation successful',
				ask: {
					id: ask._id.toString(),
					message: ask.message,
					expirationDate: ask.expirationDate.toDateString(),
					createdAt: ask.createdAt.toDateString(),
					locaton: ask.location,
					imageUrl: ask.imageUrl,
					categoryId: ask.categoryId,
					userId: ask.userId,
				},
			});
		}
	} catch (error) {
		console.log(error);
		return res.status(422).json({
			success: false,
			message: 'the request params is not valid',
		});
	}
};
