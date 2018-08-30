const { createEndpoint } = require('../server-utils/create-endpoint');
const { HttpSuccessResponse } = require('../server-utils/http-response');

const pingCtrl = createEndpoint(req =>
	Promise
		.resolve(req)
		.then(_ => new HttpSuccessResponse({
			connection: true
		}))
);

module.exports.pingCtrl = pingCtrl;
