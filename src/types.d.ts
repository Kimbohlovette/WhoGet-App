export interface AskType {
    id: string;
	message: string;
	categoryId: string;
	userId: string;
	expirationDate: string;
	imageUrl: string;
	location?: string;
}

export interface UserType {
    id: string;
	name: string;
	phoneNumber: string;
	email: string;
	role: 'user' | 'admin';
    profileImage: 'string';
}
