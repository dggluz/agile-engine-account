const { generateId } = require('../utils');

class Transaction {
	constructor (transactedQty) {
		this._id = generateId();
		this._transactedQty = transactedQty;
		this._date = new Date();
	}

	getId () {
		return this._id;
	}

	getDate () {
		return this._date;
	}

	getTransactedQty () {
		return this._transactedQty;
	}
}

module.exports.Transaction = Transaction;
