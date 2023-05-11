import { Request, Response } from 'express';
import { AskType } from '../../types';
import { Ask } from '../../models/askModel';

export const createAsk = async (req: Request, res: Response) => {
	const payload: AskType = req.body;

	if (
		payload.message === '' ||
		payload.expirationDate === '' ||
		payload.categoryId === ''
	) {
		return res.status(400);
	}
	// Check if userId exists
	try {
		const user = await Ask.find({ _id: payload.userId });
		if (!user) {
			return res
				.status(400)
				.json({ success: false, message: 'userId is not valid' });
		}
	} catch (error) {
		console.log(error);
		res.status(404).json({
			success: false,
			message: 'resource does not exist',
		});
	}

	const newAsk = await Ask.create({
		expirationDate: payload.expirationDate,
		message: payload.message,
		imageUrl: payload.imageUrl,
		location: payload.location,
		userId: payload.userId,
		categoryId: payload.categoryId,
		status: payload.status,
		contactNumber: payload.contactNumber,
		userName: payload.userName,
	});
	return res.status(201).json({
		success: true,
		message: 'ask successfully created',
		newAsk: {
			id: newAsk._id,
			message: newAsk.message,
			categoryId: newAsk.categoryId,
			imageUrl: newAsk.imageUrl,
			location: newAsk.location,
			userId: newAsk.userId,
			createdAt: newAsk.createdAt,
		},
	});
};
