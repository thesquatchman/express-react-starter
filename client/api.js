export default class Client {
	constructor() {
		this.baseUrl = 'http://localhost:8080/api/';
		this.defaultHeaders = {
			'Content-Type': 'application/json',
			Accept: 'json'
		};
	}

	getMessage = () => this.getFromApi(this.baseUrl);

	getFromApi = url =>
		fetch(url, {
			headers: this.defaultHeaders
		}).then(response => response.json());
}
