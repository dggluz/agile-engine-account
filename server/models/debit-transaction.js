const { Transaction } = require('./transaction');

class DebitTransaction extends Transaction {
	getType () {
		return 'DEBIT';
	}
}

module.exports.DebitTransaction = DebitTransaction;
