import { Request, Response } from 'express';
import { Ask } from '../../models/askModel';

export const deleteAsk = async (req: Request, res: Response) => {
	const id = req.params['id'];
	if (!id) {
		return res.status(400).json({
			success: false,
			message: 'bad request body',
		});
	}
	try {
		const deleted = await Ask.findByIdAndDelete(id);
		if (!deleted) {
			return res.status(404).json({
				success: false,
				message: 'resource not found',
			});
		}
		return res.status(200).json({
			success: true,
			message: 'delete operation successful',
			deletedId: deleted._id.toString(),
		});
	} catch (error) {
		console.log(error);
	}
};
