class HttpResponse {
	constructor (statusCode, body) {
		this._statusCode = statusCode;
		this._body = body;
	}

	getStatusCode () {
		return this._statusCode;
	}

	getBody () {
		return this._body;
	}
}

class HttpSuccessResponse extends HttpResponse {
	constructor (body) {
		super(200, body);
	}
}

class HttpError extends HttpResponse {}

class BadRequestError extends HttpError {
	constructor (message) {
		super(400, message);
	}
}

class ConflictError extends HttpError {
	constructor (message) {
		super(409, message);
	}
}

class InternalServerError extends HttpError {
	constructor(err) {
		super(500, 'Internal server error');
		console.error(err);
	}
}

module.exports.HttpResponse = HttpResponse;
module.exports.HttpSuccessResponse = HttpSuccessResponse;
module.exports.HttpError = HttpError;
module.exports.BadRequestError = BadRequestError;
module.exports.ConflictError = ConflictError;
module.exports.InternalServerError = InternalServerError;
