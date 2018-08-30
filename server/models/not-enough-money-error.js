class NotEnoughMoneyError extends Error {
	constructor () {
		super(`Can not perform credit because there is not enough available money.`);
	}
}

module.exports.NotEnoughMoneyError = NotEnoughMoneyError;
