const { Transaction } = require('./transaction');

class CreditTransaction extends Transaction {
	getType () {
		return 'CREDIT';
	}
}

module.exports.CreditTransaction = CreditTransaction;
