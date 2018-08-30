const { createEndpoint } = require('../server-utils/create-endoint');
const { HttpSuccessResponse } = require('../server-utils/http-response');

const pingCtrl = createEndpoint(_ =>
	Promise
		.resolve(new HttpSuccessResponse({
			connection: true
		}))
);

module.exports.pingCtrl = pingCtrl;
