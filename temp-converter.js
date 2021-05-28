const temperature = 73 //Insert temperature here.
const tempScaleInput = 'Fahrenheit' //Insert 'Celsius' or 'Fahrenheit'.

//-------------DO NOT CHANGE-------------------------------
const scaleConverter = () => {
if (tempScaleInput === 'Celsius') {
  const fahrenheit = temperature * 9/5 + 32
  console.log(`${temperature} degrees Celsius is ${fahrenheit} Fahrenheit`)
} else if (tempScaleInput === 'Fahrenheit') {
  const celsius = Math.floor((temperature - 32) * 5/9)
  console.log(`${temperature} degrees Fahrenheit is ${celsius} Celsius`)
} else {return 'You need to insert "Celsius" or "Fahrenheit" in tempScaleInput variable'};
};
scaleConverter();
//--------------------------------------------------------

//actual exercise:
/*
const kelvin = 283; //Setting Kelvin temperature
const celsius = kelvin - 273; //As Celsius is 273 degrees less than Kelvin
const fahrenheit = Math.floor((celsius *(9/5))+32);//round to the lowest integer
const newton = Math.floor(celsius * (33/100));
console.log(`Celsius= ${celsius}`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log(`The temperature is also ${newton} Newton`);
*/