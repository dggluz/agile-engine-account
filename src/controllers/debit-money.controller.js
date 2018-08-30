const { createEndpoint } = require('../server-utils/create-endoint');
const { HttpSuccessResponse, ConflictError } = require('../server-utils/http-response');
const { checkBody } = require('../middlewares/check-body.middleware');
const { objectOfLike } = require('../validators/object-of-like');
const { numberLike } = require('../validators/number-like');
const { NotEnoughMoneyError } = require('../models/not-enough-money-error');

const debitMoneyCtrl = account =>
	createEndpoint(req =>
		Promise
			.resolve(req)
			.then(checkBody(objectOfLike({
				moneyToDebit: numberLike
			})))
			.then(req => account.debit(req.body.moneyToDebit))
			.catch(err =>
				Promise.reject(
					err instanceof NotEnoughMoneyError ?
						// I think ConflictError is the most appropiate HTTP error (https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP#4xx_Errores_del_cliente)
						new ConflictError(err.message) :
						err
				)
			)
			.then(_ => new HttpSuccessResponse({
				status: 'ok'
			})
		)
	) 
;

module.exports.debitMoneyCtrl = debitMoneyCtrl;
