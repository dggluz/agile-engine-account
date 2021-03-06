const { createServer, plugins } = require('restify');

const startServer = () => {
	const name = 'agile-engine-transaction';
	const version = 'v0.0.0';
	const configs = {
		server: {
			port: 3000
		}
	};

	const server = createServer({
		name,
		version
	});

	server.use((_req, res,next) => {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', 'X-Requested-With');
		return next();
	});
	server.use(plugins.acceptParser(server.acceptable));
	server.use(plugins.queryParser());
	server.use(plugins.bodyParser());

	server.listen(configs.server.port, function () {
		console.log('%s listening at %s', server.name, server.url);
	});

	return server;
};

module.exports.createServer = startServer;