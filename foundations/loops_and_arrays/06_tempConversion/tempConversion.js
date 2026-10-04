const convertToCelsius = function (temperature) {
  let FtoC = (temperature - 32) * 5 / 9;
  FtoC = +FtoC.toFixed(1);
  return FtoC;
};

const convertToFahrenheit = function (number) {
  let CtoF = (number * (9 / 5)) + 32;
  CtoF = +CtoF.toFixed(1);
  return CtoF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
