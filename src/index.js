module.exports = function multiply(first, second) {
  
  const firstNumber = BigInt(first);
  const secondNumber = BigInt(second);
  const resultNumber = firstNumber * secondNumber;
  
  return resultNumber.toString();

}
