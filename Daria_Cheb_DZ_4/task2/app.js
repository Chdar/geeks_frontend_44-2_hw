function palindrome() {
    let result = prompt("Введите значение");
    let stringArr = result.split("").reverse().join("");

    if (result == stringArr) {
        console.log("Данное значение является палиндромом");
    } else {
        console.log("Данное значение не является палиндромом");
    }
}
palindrome();