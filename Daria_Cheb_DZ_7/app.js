const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const resultDiv = document.getElementById("result");

function calculateBMI() {
    const height = parseFloat(heightInput.value) / 100; // Конвертируем в метры
    const weight = parseFloat(weightInput.value);

    if (height > 0 && weight > 0) {
        const bmi = (weight / (height * height)).toFixed(2);

        let interpretation = "";
        if (bmi < 18.5) {
            interpretation = "Недостаточная (дефицит) масса тела";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            interpretation = "Норма";
        } else if (bmi >= 25 && bmi < 29.9) {
            interpretation = "Избыточная масса тела";
        } else {
            interpretation = "Ожирение";
        }

        resultDiv.textContent = `Ваш результат: ${bmi} (${interpretation})`;
    } else {
        resultDiv.textContent = "Введите корректные данные.";
    }
}

heightInput.addEventListener("input", calculateBMI);
weightInput.addEventListener("input", calculateBMI);