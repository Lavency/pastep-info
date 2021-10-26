const fetch = require("node-fetch");
class Base {
	constructor(endpoint) {
		this.endpoint = endpoint;
	}
	fetch = async (url) => {
		const response = await fetch(`${this.endpoint}${url}`);
		const data = await response.json();
		return { response, data };
	};
}

module.exports = Base;
