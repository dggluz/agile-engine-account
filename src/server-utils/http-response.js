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

module.exports.HttpResponse = HttpResponse;
module.exports.HttpSuccessResponse = HttpSuccessResponse;
