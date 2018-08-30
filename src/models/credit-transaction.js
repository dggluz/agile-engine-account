const { Transaction } = require('./transaction');

class CreditTransaction extends Transaction {
	getType () {
		return 'CREDIT';
	}

	getPreviousAccountMoney () {
		return this.getResultingAccountMoney() - this.getTransactedQty();
	}
}

module.exports.CreditTransaction = CreditTransaction;
