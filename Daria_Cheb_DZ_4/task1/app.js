// полная таблица умножения
function multiply(number) {
    for (let i = 1; i <= 10;  i += 1) {
        for (let j = 1; j <= 10; j += 1) {
          console.log(`${i} x ${j} = ${i * j}`);
    }
    }
}
multiply();

// таблица умножения только для числа 6
function multiplicationTable(number) {
    for (let j = 1; j <= 10; j += 1) {
        console.log(`${number} x ${j} = ${number * j}`);
    }
}

multiplicationTable(6); 