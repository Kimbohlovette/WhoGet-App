export interface AskType {
	id: string;
	message: string;
	categoryId: string;
	userId: string;
	expirationDate: string;
	createdAt: string;
	imageUrl: string;
	location?: string;
	activities?: AskActivityType[];
	status: string;
	contactNumber: string;
	userName: string;
}

export interface UserType {
	id: string;
	name: string;
	phoneNumber: string;
	email: string;
	role: 'user' | 'admin';
	profileImage: 'string';
	uid: string;
	activities?: UserActivityType[];
}

export interface AskActivityType {
	userId: string;
	dateResponded: string;
}

export interface UserActivityType {
	askId: string;
	date: string;
}
