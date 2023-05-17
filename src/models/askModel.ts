import mongoose from 'mongoose';

const AskSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: [true, 'UserId field cannot be empty.'],
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
		userName: {
			type: String,
			required: false,
		},
		contactNumber: {
			type: String,
			required: false,
		},
		categoryName: {
			type: String,
			required: false,
		},
		location: {
			type: String,
			required: false,
		},
		imageUrl: {
			type: String,
			required: false,
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
AskSchema.index({
	'$**': 'text',
});
const Ask = mongoose.model('Ask', AskSchema);

export { Ask };
