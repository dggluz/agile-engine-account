const { Transaction } = require('./transaction');

class DebitTransaction extends Transaction {
	getType () {
		return 'DEBIT';
	}

	getPreviousAccountMoney () {
		return this.getResultingAccountMoney() + this.getTransactedQty();
	}
}

module.exports.DebitTransaction = DebitTransaction;
