import { NextFunction, Request, Response } from 'express';
import { User } from '../../models/userModel';

export const getUserByEmail = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const email = String(req.params['email']);
	if (!email) {
		return res.status(400).json({
			success: false,
			message: 'bad request',
		});
	}
	try {
		const user = await User.findOne({ email: email });
		if (!user) {
			return res.status(404).json({
				success: false,
				message: 'resource not found',
			});
		} else {
			return res.status(200).json({
				success: true,
				message: 'get user successful',
				user: {
					id: user._id.toString(),
					name: user.name,
					email: user.email,
					phoneNumber: user.phoneNumber,
					profileImage: user.profileImage,
					role: user.role,
					location: user.location,
					status: user.status,
					activities: user.activities,
					createdAt: user.createdAt,
				},
			});
		}
	} catch (error) {
		// console.log(error);
		return res.status(422).json({
			success: false,
			message: 'unprocessible',
		});
	}
};
