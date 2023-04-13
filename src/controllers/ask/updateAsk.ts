import { Request, Response } from 'express';
import { Ask } from '../../models/askModel';

export const updateAsk = async (req: Request, res: Response) => {
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
			return res.status(201).json({
				success: true,
				message: 'update operation successful',
				deleted: updated.id.toString(),
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
