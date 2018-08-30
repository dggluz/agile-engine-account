const { createEndpoint } = require('../server-utils/create-endpoint');
const { HttpSuccessResponse } = require('../server-utils/http-response');

const getTransactionsCtrl = account =>
	createEndpoint(req =>
		Promise
			.resolve(req)
			.then(_ => new HttpSuccessResponse({
				money: account
					.getTransactions()
					.map(aTransaction => ({
						timestamp: aTransaction.getDate().getTime(),
						type: aTransaction.getType(),
						transactedQty: aTransaction.getTransactedQty(),
						previousAccountMoney: aTransaction.getPreviousAccountMoney(),
						resultingAccountMoney: aTransaction.getResultingAccountMoney()
					}))
			})
		)
	)
;

module.exports.getTransactionsCtrl = getTransactionsCtrl;
