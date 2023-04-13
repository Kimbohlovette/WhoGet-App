import { Request, Response } from 'express';
import { User } from '../../models/userModel';

export const deleteUser = async (req: Request, res: Response) => {
	const id = String(req.params['id']);
	if (!id) {
		return res.status(400).json({
			success: false,
			message: 'delete operation successful',
		});
	}
	try {
		const deleted = await User.findByIdAndDelete(id);
		if (!deleted) {
			res.status(404).json({
				success: false,
				message: 'resource not found',
			});
		} else {
			res.status(200).json({
				success: true,
				message: 'delete operation successful',
				deletedId: deleted._id.toString(),
			});
		}
	} catch (error) {
		res.status(400).json({
			success: false,
			message: 'bad request body',
		});
	}
};
