const convertToCelsius = function (celsius) {
  let convertTemp = Math.round((celsius - 32) * (5 / 9) * 10) / 10;
  return convertTemp;
};

const convertToFahrenheit = function (fahrenheit) {
  let convertTemp = Math.round(((fahrenheit * 9 / 5) + 32) * 10) / 10;
  return convertTemp;
};

convertToCelsius(32);
convertToCelsius(100);
convertToCelsius(-100);

convertToFahrenheit(0);
convertToFahrenheit(73.2);
convertToFahrenheit(-10);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
