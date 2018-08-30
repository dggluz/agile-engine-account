const { ValidationError } = require('./validation-error');

const numberLike = ret => {
	if (isNaN(ret)) {
		throw new ValidationError(`The value is not numeric (has "${(ret)}" value)`);
	}
	return Number(ret);
};

module.exports.numberLike = numberLike;
