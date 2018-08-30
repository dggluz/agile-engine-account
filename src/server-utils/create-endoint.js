const createEndpoint = controller =>
	(req, res) =>
		controller(req)
			.then(result => res.send(result), err => {
				console.error(err);
				res.send(500, 'Internal server error');
			})
;

module.exports.createEndpoint = createEndpoint;
