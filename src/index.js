module.exports = function multiply(first, second) {
    
  const resultNumber = BigInt(first) * BigInt(second);

  return resultNumber.toString();

}
