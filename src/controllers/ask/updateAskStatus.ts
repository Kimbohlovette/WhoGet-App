import { Request, Response } from 'express';
import { Ask } from '../../models/askModel';

export const updateAskStatus = async (req: Request, res: Response) => {
	const id = String(req.params['id']);
	const payload = req.body;
	if (!id) {
		return res.status(400).json({
			success: false,
			message: 'bad request params',
		});
	}
	try {
		const updated = await Ask.findByIdAndUpdate(id, payload);
		if (!updated) {
			return res.status(404).json({
				success: false,
				message: 'resource not found',
			});
		} else {
			const {
				id,
				userId,
				message,
				location,
				status,
				expirationDate,
				createdAt,
				imageUrl,
				activities,
				updatedAt,
			} = updated;
			return res.status(201).json({
				success: true,
				message: 'update operation successful',
				updated: {
					id,
					userId,
					message,
					location,
					status,
					expirationDate,
					createdAt,
					imageUrl,
					activities,
					updatedAt,
					...payload,
				},
			});
		}
	} catch (error) {
		//console.log(error);
		return res.status(404).json({
			success: false,
			message: 'resource not found',
		});
	}
};
