import { Request, Response } from 'express';
import { UserType } from '../../types';
import { User } from '../../models/userModel';

export const createUser = async (req: Request, res: Response) => {
	const payload: UserType = req.body;
	if (
		payload.name === '' ||
		payload.email === '' ||
		payload.phoneNumber === '' ||
		!payload.role ||
		!payload.uid
	) {
		return res
			.status(400)
			.json({ success: false, message: 'bad request body' });
	}

	try {
		const newUser = await User.create(payload);
		res.status(201).json({
			sucess: true,
			message: 'create user operation successful',
			newUser: {
				id: newUser._id.toHexString(),
				name: newUser.name,
				phoneNumber: newUser.phoneNumber,
				email: newUser.email,
				role: newUser.role,
				profileImage: newUser.profileImage,
				activities: newUser.activities,
				createdAt: newUser.createdAt.toLocaleTimeString(),
				location: newUser.location,
				uid: newUser.uid,
			},
		});
	} catch {
		return res.status(422).json({
			success: false,
			message: 'Unable to process request',
		});
	}
};
