const { createEndpoint } = require('../server-utils/create-endoint');

const pingCtrl = createEndpoint(_ =>
	Promise
	.resolve({
		connection: true
	})
);

module.exports.pingCtrl = pingCtrl;
