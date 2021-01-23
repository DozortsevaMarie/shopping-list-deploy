import { createServer } from 'miragejs';

createServer({
	routes() {
		this.get('/api/auth/me', () => ({
			resultCode: 0,
			data: {
				id: 2,
				email: 'blabla@bla.bla',
				login: 'CurrentUser'
			}
		}))

		this.post('api/auth/login', (schema, request) => {
			let attrs = JSON.parse(request.requestBody)})
	}

})