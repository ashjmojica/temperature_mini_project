// temperature today will be 301 Kelvin
const kelvinTemp = 301;

//Celcius is 273.15 degrees less than Kelvin
const celciusTemp = kelvinTemp - 273.15;

//converting temp to farenheit
const farenheitTemp = celciusTemp * (9/5) + 32;

//rounding value of farenheit down
farenheitTemp = Math.floor(farenheitTemp);



console.log("The temperature is" + farenheitTemp + " degrees Farenheit.");


