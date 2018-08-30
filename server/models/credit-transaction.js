const { Transaction } = require('./transaction');

class CreditTransaction extends Transaction {
	getType () {
		return 'credit';
	}
}

module.exports.CreditTransaction = CreditTransaction;
