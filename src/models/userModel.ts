import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Name field cannot be empty.'],
		},
		phoneNumber: {
			type: Number,
			required: [true, 'Phone number field cannot be empty.'],
		},
		email: {
			type: String,
			required: [true, 'Email field cannot be empty.'],
		},
		profileImage: {
			type: String,
			required: [true, 'Profile Image Url field cannot be empty.'],
		},
		role: {
			type: String,
			required: [true, 'Profile Image Url field cannot be empty.'],
		},
		status: {
			type: String,
			required: [true, 'User status field cannot be empty.'],
		},
		activities: {
			type: String,
			required: false,
		},
	},
	{ timestamps: true }
);
const User = mongoose.model('User', UserSchema);

export { User };
