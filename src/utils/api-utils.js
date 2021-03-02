import request from 'superagent';

const URL = 'https://fierce-sea-35312.herokuapp.com';

// creates a user in the DB, returns the user's session auth token
export async function signUpUser(email, password) {
	const response = await request.post(`${URL}/auth/signup`)
		.send({ email, password });

	return response.body;
}

export async function loginUser(email, password) {
	const response = await request.post(`${URL}/auth/signin`)
		.send({ email, password });

	return response.body;
}

export async function getToDos(token) {
	const response = await request.get(`${URL}/api/todos`)
		.set({'Authorization': token});

	return response.body;
}

export async function addToDo(todo, token) {
	const response = await request.post(`${URL}/api/todos`)
		.set({'Authorization': token})
		.send({todo});

	return response.body;
}

export async function completeToDo(todoID, token) {
	const response = await request.put(`${URL}/api/todos/${todoID}`)
		.set({'Authorization': token})

	return response.body;
}