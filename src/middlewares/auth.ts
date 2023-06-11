import { NextFunction, Request, Response } from 'express';

export const verifyAuthToken = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const token = req.headers['authorization'];
	if (!token) {
		return res.status(401).json({
			message: 'No authorization headers',
			code: 'invalid_header',
		});
	}

	const parts = token.split(' ');
	if (parts[0].toLowerCase() !== 'bearer') {
		return res.status(401).json({
			message: `Authorization header must start with "Bearer"`,
			code: 'invalid_header',
		});
	}
	if (parts.length === 1) {
		return res.status(401).json({
			message: `Token not found in authorization header`,
			code: 'invalid_header',
		});
	}
	if (parts.length > 2) {
		return res.status(401).json({
			message: `Authorization must be bearer token`,
			code: 'invalid_header',
		});
	}
	const jwt = parts[1];

	//@TODO:  decode token and verify the token
	next();
};
