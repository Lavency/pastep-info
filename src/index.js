const Base = require("./Classes/Base");
const base = new Base("https://api.pastep.com");

const user = async (username) => {
	return base.fetch(`/accounts/get?username=${username}`);
};
const paste = async (name) => {
	return base.fetch(`/pastes/read?isRaw=no&name=${name}`);
};
module.exports = { user, paste };
