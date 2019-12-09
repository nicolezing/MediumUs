function generatePropsValidator(dependencies = [], requiredType = 'default') {
  const validTypes = [
    'undefined',
    'object',
    'boolean',
    'number',
    'bigint',
    'string',
    'symbol',
    'function',
  ];
  // validate requiredTypes
  if (!validTypes.includes(requiredType)) {
    return new Error(
      `Invalid input of requiredType, use any one from : ${validTypes}`,
    );
  }
  // validate dependencies
  if (dependencies.length <= 0) {
    return new Error(`Please enter at least one dependency as an array`);
  }

  return (props, propName, componentName) => {
    let error;
    // props validator
    // check all the dependencies is true in props
    if (dependencies.every(ele => props[ele])) {
      if (!props[propName]) {
        error = new Error(
          `Please provide property: ${propName} in ${componentName}`,
        );
        // eslint-disable-next-line valid-typeof
      } else if (typeof props[propName] !== requiredType) {
        error = new Error(
          `Invalid type of ${propName} in ${componentName}, please provide a ${requiredType}`,
        );
      }
    }
    return error;
  };
}

export default generatePropsValidator;
