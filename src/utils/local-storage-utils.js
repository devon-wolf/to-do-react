const USER = 'USER';

export function getLocalUser() {
	const user = localStorage.getItem(USER);
	try {
		const parsedUser = JSON.parse(user);
		if (parsedUser && parsedUser.token) {
			return parsedUser;
		}
	}
	
	catch(e) {
		return {
			id: '',
			email: '',
			token: ''
		}
	}
}

export function storeLocalUser(user) {
	localStorage.setItem(USER, JSON.stringify(user));
}