import { Request, Response } from 'express';
import { Ask } from '../../models/askModel';
import { User } from '../../models/userModel';
import { Category } from '../../models/categoryModel';

export const search = async (req: Request, res: Response) => {
	const searchKey = (req.query['q'] as string).trim();
	const { limit, page } = req.params;

	try {
		const asks = (
			await Ask.find(
				{ $text: { $search: searchKey } },
				{ score: { $meta: 'textScore' } },
				{ _id: 1, message: 1, createdAt: 1, userName: 1 }
			).sort({ score: { $meta: 'textScore' } })
		)
			.filter((ask) => ask.status === 'visible')
			.map((ask) => ({
				message: ask.message,
				id: ask.id,
				createdAt: ask.createdAt,
				userName: ask.userName,
			}));

		const users = (
			await User.find(
				{ $text: { $search: searchKey } },
				{ _id: 1, name: 1, profileImage: 1 },
				{ score: { $meta: 'textScore' } }
			).sort({ score: { $meta: 'textScore' } })
		).map((user) => ({
			id: user.id.toString(),
			name: user.name,
			profileImage: user.profileImage,
		}));

		const categories = (
			await Category.find(
				{
					$text: { $search: searchKey },
				},
				{ score: { $meta: 'textScore' } }
			).sort({ score: { $meta: 'textScore' } })
		).map((cat) => ({ id: cat.id.toString(), name: cat.name }));

		return res.status(200).json({
			success: true,
			asks,
			users,
			categories,
		});
	} catch (error) {
		res.status(404).json({
			success: false,
			message: 'resource_not_found',
		});
	}
};
