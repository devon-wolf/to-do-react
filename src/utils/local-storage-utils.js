const USER = 'USER';

export function getLocalUser() {
	const user = localStorage.getItem(USER);

	if (user && user.token) return JSON.parse(user);

	else return {
		email: '',
		id: '',
		token: ''
	}
}

export function storeLocalUser(user) {
	localStorage.setItem(USER, JSON.stringify(user));
}