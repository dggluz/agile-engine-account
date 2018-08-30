const { NotEnoughMoneyError } = require('./not-enough-money-error');
const { CreditTransaction } = require('./credit-transaction');
const { DebitTransaction } = require('./debit-transaction');

class Account {
	constructor (initialMoneyQty) {
		this._setMoney(initialMoneyQty);
		this._transactions = [];
	}

	getMoney () {
		return this._money;
	}

	getTransactions () {
		return this._transactions;
	}

	credit (moneyToCredit) {
		this
			._setMoney(this.getMoney() + moneyToCredit)
			._addTransaction(new CreditTransaction(moneyToCredit, this.getMoney()))
		;
		return this;
	}

	debit (moneyToDebit) {
		this
			._setMoney(this.getMoney() - moneyToDebit)
			._addTransaction(new DebitTransaction(moneyToDebit, this.getMoney()))
		;
		return this;
	}

	_setMoney (money) {
		if (money < 0) {
			throw new NotEnoughMoneyError();
		}
		this._money = money;
		return this;
	}

	_addTransaction (transaction) {
		this._transactions.push(transaction);
		return this;
	}
}

module.exports.Account = Account;
