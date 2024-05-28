const sumAll = function (firstNumber, lastNumber) {
  if (
    typeof firstNumber !== "number" ||
    typeof lastNumber !== "number" ||
    firstNumber < 0 ||
    lastNumber < 0
  ) {
    return "ERROR";
  }
  let temp = lastNumber;
  if (firstNumber > lastNumber) {
    lastNumber = firstNumber;
    firstNumber = temp;
  }
  let sum = 0;
  for (let i = firstNumber; i <= lastNumber; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
