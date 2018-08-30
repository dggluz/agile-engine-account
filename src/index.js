const { startServer } = require('./start-server');

const createEndpoint = controller =>
	(req, res) =>
		controller(req)
			.then(result => res.send(result), err => {
				console.error(err);
				res.send(500, 'Internal server error');
			})
;

const pingCtrl = createEndpoint(_ =>
	Promise
	.resolve({
		connection: true
	})
);

const server = startServer();

server.get('/ping', pingCtrl);

