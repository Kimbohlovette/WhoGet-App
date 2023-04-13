import { Request, Response } from 'express';
import { Category } from '../../models/categoryModel';

export const createCategory = async (req: Request, res: Response) => {
	const payload = req.body;
	if (payload.name === '') {
		return res.status(400).json({
			success: false,
			message: 'bad request body',
		});
	}
	try {
		const created = await Category.create({
			...payload,
		});
		res.status(200).json({
			success: true,
			message: 'create category successful',
			category: { id: created._id.toString(), name: created.name },
		});
	} catch (error) {
		return res.status(422).json({
			success: false,
			message: 'unprocessible',
		});
	}
};
