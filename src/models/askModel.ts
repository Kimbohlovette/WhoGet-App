import mongoose from 'mongoose';

const AskSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: [true, 'UserId field cannot be empty.'],
		},
		userName: {
			type: String,
			required: false,
		},
		contactNumber: {
			type: String,
			required: false,
		},
		message: {
			type: String,
			required: [true, 'Name field cannot be empty.'],
		},
		expirationDate: {
			type: Date,
			required: [true, 'Expiration date field cannot be empty.'],
		},
		categoryId: {
			type: String,
			required: [true, 'Category field cannot be empty.'],
		},
		categoryName: {
			type: String,
			required: false,
		},
		location: {
			type: String,
			required: [true, 'Location field cannot be empty.'],
		},
		imageUrl: {
			type: String,
			required: [true, 'Image Url field cannot be empty.'],
		},
		activities: {
			type: Array,
			required: false,
		},
		status: {
			type: String,
			required: [true, 'Ask status field cannot be empty.'],
		},
	},
	{ timestamps: true }
);
AskSchema.index({ message: 'text', location: 'text', status: 'text' });
const Ask = mongoose.model('Ask', AskSchema);

export { Ask };
