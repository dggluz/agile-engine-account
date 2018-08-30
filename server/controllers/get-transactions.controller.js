const { createEndpoint } = require('../server-utils/create-endpoint');
const { HttpSuccessResponse } = require('../server-utils/http-response');

const getTransactionsCtrl = account =>
	createEndpoint(req =>
		Promise
			.resolve(req)
			.then(_ => new HttpSuccessResponse({
				transactions: account
					.getTransactions()
					.map(aTransaction => ({
						id: aTransaction.getId(),
						type: aTransaction.getType(),
						ammount: aTransaction.getTransactedQty(),
						effectiveDate: aTransaction.getDate().toString()
					}))
			})
		)
	)
;

module.exports.getTransactionsCtrl = getTransactionsCtrl;
