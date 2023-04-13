import mongoose from 'mongoose';

const AskSchema = new mongoose.Schema(
	{
		message: {
			type: String,
			required: [true, 'Name field cannot be empty.'],
		},
		expirationDate: {
			type: Date,
			required: [true, 'Expiration date field cannot be empty.'],
		},
		location: {
			type: String,
			required: [true, 'Location field cannot be empty.'],
		},
		imageUrl: {
			type: String,
			required: [true, 'Image Url field cannot be empty.'],
		},
	},
	{ timestamps: true }
);

const Ask = mongoose.model('Ask', AskSchema);

export { Ask };