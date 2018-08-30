const { obj } = require('./obj');
const { ValidationError } = require('./validation-error');

const objectOfLike = mapOfValidators => {
	obj(mapOfValidators);

	return target => {
		target = obj(target);
		return Object
			.keys(mapOfValidators)
			.reduce((ret, aKey) => {
				try {
					ret[aKey] = mapOfValidators[aKey](target[aKey]);
					return ret;
				}
				catch (err) {
					if (err instanceof ValidationError) {
						throw new ValidationError(`[${aKey}]: ${err.message}`);
					}
					else {
						throw err;
					}
				}
			}, {});
	};
};

module.exports.objectOfLike = objectOfLike;
