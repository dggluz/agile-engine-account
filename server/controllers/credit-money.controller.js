const { createEndpoint } = require('../server-utils/create-endpoint');
const { HttpSuccessResponse } = require('../server-utils/http-response');
const { checkBody } = require('../middlewares/check-body.middleware');
const { objectOfLike } = require('../validators/object-of-like');
const { numberLike } = require('../validators/number-like');

const creditMoneyCtrl = account =>
	createEndpoint(req =>
		Promise
			.resolve(req)
			.then(checkBody(objectOfLike({
				moneyToCredit: numberLike
			})))
			.then(req => account.credit(req.body.moneyToCredit))
			.then(_ => new HttpSuccessResponse({
				status: 'ok'
			})
		)
	)
;

module.exports.creditMoneyCtrl = creditMoneyCtrl;
