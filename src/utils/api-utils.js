import request from 'superagent';

// change to localhost port if needed for debugging
const URL = 'https://fierce-sea-35312.herokuapp.com';

// creates a user in the DB, returns the user's session auth token
export async function signUpUser(email, password) {
	const response = await request.post(`${URL}/auth/signup`)
		.send({ email, password });

	return response.body;
}

// logs in exsiting user, returns user's session auth token
export async function loginUser(email, password) {
	const response = await request.post(`${URL}/auth/signin`)
		.send({ email, password });

	return response.body;
}

// returns all todos for user
export async function getToDos(token) {
	const response = await request.get(`${URL}/api/todos`)
		.set({'Authorization': token});

	return response.body;
}

// adds a new todo item, returns the added item
export async function addToDo(todo, token) {
	const response = await request.post(`${URL}/api/todos`)
		.set({'Authorization': token})
		.send({todo: todo, completed: false});

	return response.body;
}

// updates the 'completed' property of a todo item, returns the updated item
export async function completeToDo(todoID, token) {
	const response = await request.put(`${URL}/api/todos/${todoID}`)
		.set({'Authorization': token})
		.send({completed: true});

	return response.body;
}