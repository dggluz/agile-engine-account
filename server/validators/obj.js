const { ValidationError } = require('./validation-error');

const obj = target => {
	if (typeof target !== 'object') {
		throw new ValidationError(`Object expected but ${typeof target} was found (with value ${target})`);
	}
	return target;
}

module.exports.obj = obj;
