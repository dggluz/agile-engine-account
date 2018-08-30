const { NotEnoughMoneyError } = require('./not-enough-money-error');
const { CreditTransaction } = require('./credit-transaction');
const { DebitTransaction } = require('./debit-transaction');

class Account {
	constructor (initialMoneyQty) {
		this._money = initialMoneyQty;
		this._transactions = [];
	}

	getMoney () {
		return this._money;
	}

	getTransactions () {
		return this._transactions;
	}

	credit (moneyToCredit) {
		this._money = this.getMoney() + moneyToCredit;
		this._addTransaction(new CreditTransaction(moneyToCredit, this.getMoney()));
		return this;
	}

	debit (moneyToDebit) {
		if (this.getMoney() < moneyToDebit) {
			throw new NotEnoughMoneyError(this.getMoney(), moneyToDebit);
		}
		this._money = this.getMoney() - moneyToDebit;
		this._addTransaction(new DebitTransaction(moneyToDebit, this.getMoney()));
		return this;
	}

	_addTransaction (transaction) {
		this._transactions.push(transaction);
		return this;
	}
}

module.exports.Account = Account;
