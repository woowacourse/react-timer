const numberDataChangeTwo = (inputs: number): string => {
  if (inputs >= 10) {
    return inputs + '';
  }
  return `0${inputs}`;
};

const numberDataChangeMS = (inputs: number): string => {
  if (inputs >= 1000) {
    return inputs + '';
  } else if (inputs >= 100) {
    return `0${inputs}`;
  } else if (inputs >= 10) {
    return `00${inputs}`;
  }
  return `000${inputs}`;
};

export { numberDataChangeTwo, numberDataChangeMS };
