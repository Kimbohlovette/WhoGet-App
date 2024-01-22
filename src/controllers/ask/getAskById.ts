import { Request, Response } from 'express';
import { Ask } from '../../models/askModel';
import { User } from '../../models/userModel';

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
			const owner = await User.findById(ask.userId, {
				phoneNumber: 1,
				name: 1,
				_id: 1,
				email: 1,
				location: 1,
				profileImage: 1,
			});
			return res.status(200).json({
				success: true,
				message: 'get ask operation successful',
				ask: {
					id: ask._id.toString(),
					message: ask.message,
					expirationDate: ask.expirationDate?.toDateString(),
					createdAt: ask.createdAt.toDateString(),
					location: ask.location,
					imageUrl: ask.imageUrl,
					categoryId: ask.categoryId,
					userId: ask.userId,
					status: ask.status,
					activities: ask.activities,
					owner,
				},
			});
		}
	} catch (error) {
		return res.status(422).json({
			success: false,
			message: 'the request params is not valid',
		});
	}
};
