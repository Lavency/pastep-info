const fetch = require("node-fetch");

async function id(username) {
	let response = await fetch(
		`https://api.pastep.com/accounts/get?username=${username}`
	);
	const data = await response.json();
	return data.id;
}

async function persianUsername(username) {
	let response = await fetch(
		`https://api.pastep.com/accounts/get?username=${username}`
	);
	const data = await response.json();
	return data.persianUsername;
}

async function bio(username) {
	let response = await fetch(
		`https://api.pastep.com/accounts/get?username=${username}`
	);
	const data = await response.json();
	return data.bio;
}

async function avatar(username) {
	let response = await fetch(
		`https://api.pastep.com/accounts/get?username=${username}`
	);
	const data = await response.json();
	return data.avatar;
}

async function id(username) {
	let response = await fetch(
		`https://api.pastep.com/accounts/get?username=${username}`
	);
	const data = await response.json();
	return data.id;
}

module.exports = { persianUsername, bio, avatar, id };
