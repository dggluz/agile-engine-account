const createEndpoint = controller =>
	(req, res) =>
		controller(req)
			.then(
				response =>
					res.send(response.getStatusCode(), response.getBody()),
				err => {
					console.error(err);
					res.send(500, 'Internal server error');
				}
			)
;

module.exports.createEndpoint = createEndpoint;
