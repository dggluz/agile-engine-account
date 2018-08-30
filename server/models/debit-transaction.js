const { Transaction } = require('./transaction');

class DebitTransaction extends Transaction {
	getType () {
		return 'debit';
	}
}

module.exports.DebitTransaction = DebitTransaction;
