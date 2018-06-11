module.exports = (value) => {
  const EtherToWei = 10 ** 18;

  // should check whether value can be converted to integer or not
  const result = value / EtherToWei;

  return result;
};

