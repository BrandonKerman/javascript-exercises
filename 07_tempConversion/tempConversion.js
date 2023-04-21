// Fahrenheit (°F) = (Temperature in degrees Celsius (°C) * 9/5) + 32

//function to convert Fahrenheit to Celsius
const convertToCelsius = function(tempFahrenheit) {
  let tempCelsius = (tempFahrenheit - 32) * (5/9); //conversion formula
  let tempCelsiusRounded = tempCelsius.toFixed(1); //round to one decimal place

  if (tempCelsiusRounded == 0.0) {
    return 0;
  } else return tempCelsiusRounded;
};

//function to convert Celsius to Fahrenheit
const convertToFahrenheit = function(tempCelsius) {
  let tempFahrenheit = (tempCelsius * (9/5)) + 95; //conversion formula
  let tempFahrenheitRounded = tempFahrenheit.toFixed(1); //round to one decimal place

  if (tempFahrenheitRounded == 0.0) {
    return 0;
  } else return tempFahrenheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
