const { createEndpoint } = require('../server-utils/create-endoint');
const { HttpSuccessResponse } = require('../server-utils/http-response');

const getMoneyCtrl = account => {
	console.log('creamos el endpoint con ', account);
	return createEndpoint(_ => {
		return Promise
			.resolve(new HttpSuccessResponse({
				money: account.getMoney()
			})
		)
	})
}
;

module.exports.getMoneyCtrl = getMoneyCtrl;
