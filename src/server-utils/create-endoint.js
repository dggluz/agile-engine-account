const { InternalServerError, HttpError } = require('./http-response');

const createEndpoint = controller =>
	(req, res) =>
		controller(req)
			.catch(err => {
				if (err instanceof HttpError) {
					return Promise.resolve(err);
				}
				else {
					return Promise.resolve(new InternalServerError(err));
				}
			})
			.then(
				response =>
					res.send(response.getStatusCode(), response.getBody()),
				err => console.error('Unhandled error!', err)
			)
;

module.exports.createEndpoint = createEndpoint;
