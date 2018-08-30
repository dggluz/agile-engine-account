const { createEndpoint } = require('../server-utils/create-endoint');
const { HttpSuccessResponse } = require('../server-utils/http-response');

const getMoneyCtrl = account =>
	createEndpoint(_ =>
		Promise
			.resolve(new HttpSuccessResponse({
				money: account.getMoney()
			})
		)
	)
;

module.exports.getMoneyCtrl = getMoneyCtrl;
