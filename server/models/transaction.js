class Transaction {
	constructor (transactedQty, resultingQty) {
		this._transactedQty = transactedQty;
		this._resultingQty = resultingQty;
		this._date = new Date();
	}

	getDate () {
		return this._date;
	}

	getTransactedQty () {
		return this._transactedQty;
	}

	getResultingAccountMoney () {
		return this._resultingQty;
	}
}

module.exports.Transaction = Transaction;
