class NotEnoughMoneyError extends Error {
	constructor (availableMoney, moneyToCredit) {
		super(`Can not credit $${moneyToCredit} (only $${availableMoney} avialable)`);
	}
}

module.exports.NotEnoughMoneyError = NotEnoughMoneyError;
