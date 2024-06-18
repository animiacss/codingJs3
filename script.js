// Remember, we're gonna use strict mode in all scripts now!
'use strict';
//1) understanding the problem
//- What is temp amplitude? answer: differende between highest and lowest temp
//- How to compute max and min temperatures?
//- What a sensor error? and what do do?
//2) Breaking into smaller problems
//- make it ignore errors
// find max value in temp array
// find min value in temp array
// subtract min from max (amplitude) and return it

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   //loop that make max gets the value, holds and compares if the next value its bigger, and if is bigger, gets he new value.
//   for (let i = 0; i < temps.length; ++i) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (temps[i] > max) max = temps[i];
//     if (temps[i] < min) min = temps[i];
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcAmplitude(temperatures);

const measureKelvin = function () {
  const measurement = {
    trpe: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius:')),
  };

  console.table(measurement);
  //console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
//A) identify bug
//B) Fix the bug
console.log(measureKelvin());
