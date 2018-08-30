// TODO: transactions history

class Account {
	constructor (initialMoneyQty) {
		this._money = initialMoneyQty;
		this._transactions = [];
	}

	getMoney () {
		return this._money;
	}

	credit (moneyToCredit) {
		this._money = this.getMoney() + moneyToCredit;
		return this;
	}

	debit (moneyToDebit) {
		if (this.getMoney() < moneyToCredit) {
			throw new NotEnoughtMoneyError(this.getMoney(), moneyToCredit);
		}
		this._money = this.getMoney() - moneyToDebit;
		return this;
	}
}

module.exports.Account = Account;
