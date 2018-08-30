const { ValidationError } = require('../validators/validation-error');
const { BadRequestError } = require('../server-utils/http-response');

const checkBody = validation =>
	req => {
		try {
			return {
				...req,
				body: validation(req.body)
			};
		}
		catch (err) {
			if (err instanceof ValidationError) {
				throw new BadRequestError(`Invalid request body: ${err.message}`);
			}
			else {
				throw err;
			}
		}
	};
;

module.exports.checkBody = checkBody;
