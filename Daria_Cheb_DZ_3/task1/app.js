let numbers = [6,9,4,18,35,21,72,10];

let evenNumberSum = 0;
let oddNumberSum = 0;

for (let number of numbers){
    if(number % 2 === 0) {
        evenNumberSum = evenNumberSum + number;
    } else {
        oddNumberSum = oddNumberSum + number; 
    }
}

console.log("Сумма чётных чисел:", evenNumberSum, "Сумма нечётных чисел:", oddNumberSum);