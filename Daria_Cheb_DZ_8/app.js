// Задание 1: Работа с числами
const numbers = [5, 4, 1, 20, 0, -4, -8, 100, 4, -74, -5, 0, 0, 1, 2, 7];

const numbersMultiplied = numbers.map(num => num * 5);

const positiveNumbers = numbers.filter(num => num > 0);

const numbersResult = `
Оригинальный массив: ${numbers}
Умноженные на 5: ${numbersMultiplied}
Только положительные числа: ${positiveNumbers}
`;
document.getElementById('numbers-result').textContent = numbersResult;

// Задание 2: Работа с размерами
const sizesInMm = [600, 1500, 200, 3750, 1550, 1400, 1000];

const sizesInMeters = sizesInMm.map(size => size / 1000);

const sizesInInches = sizesInMm.map(size => +(size * 0.03937).toFixed(2));

// Вывод результатов
const sizesResult = `
Оригинальные размеры (мм): ${sizesInMm}
Размеры в метрах: ${sizesInMeters}
Размеры в дюймах: ${sizesInInches}
`;
document.getElementById('sizes-result').textContent = sizesResult;

// Задание 3: Фильтрация палиндромов
const strings = ['потоп', 'дом', 'казак', 'автобус', 'шалаш', 'радар', 'привет'];

const isPalindrome = str => str === str.split('').reverse().join('');
const palindromes = strings.filter(isPalindrome);

const palindromesResult = `
Оригинальный массив строк: ${strings}
Палиндромы: ${palindromes}
`;

document.getElementById('palindromes-result').textContent = palindromesResult;