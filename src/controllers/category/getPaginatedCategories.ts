import { Request, Response } from 'express';
import { Category } from '../../models/categoryModel';

export const getPaginatedCategories = async (req: Request, res: Response) => {
	const limit = Number(req.query['limit']);
	const page = Number(req.query['page']);
	try {
		const categories = (
			await Category.find({})
				.limit(limit)
				.skip((page - 1) * limit)
		).map((cat) => ({
			id: cat._id,
			name: cat.name,
		}));
		return res.status(200).json({
			success: true,
			message: 'fetch operation successful',
			categories: categories,
		});
	} catch (error) {
		console.log(error);
	}
};
