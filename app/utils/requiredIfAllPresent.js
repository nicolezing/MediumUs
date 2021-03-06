function requiredIfAllPresent(dependencies = [], requiredType = 'default') {
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
    throw new Error(
      `Invalid input of requiredType, use any one from : ${validTypes}`,
    );
  }
  // validate dependencies
  if (dependencies.length <= 0) {
    throw new Error(`Please enter at least one dependency as an array`);
  }

  return (props, propName, componentName) => {
    let error;
    // check if all the dependencies are true in props
    if (dependencies.every(ele => props[ele])) {
      // check if props provided and has required type
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

export default requiredIfAllPresent;
