import { Request, Response } from 'express';
import { User } from '../../models/userModel';

export const getAllUsers = async (req: Request, res: Response) => {
	try {
		const users = (await User.find().sort({ createdAt: -1 })).map(
			(user) => ({
				id: user._id,
				name: user.name,
				email: user.email,
				location: user.location,
				phoneNumber: user.phoneNumber,
				createdAt: user.createdAt,
				role: user.role,
				profileImage: user.profileImage,
				activities: user.activities,
				status: user.status,
			})
		);
		return res.status(200).json({
			success: true,
			message: 'fetch operation successful',
			users: users,
		});
	} catch (error) {
		return res.status(422).json({
			success: false,
			message: 'unprocessible request',
		});
	}
};
