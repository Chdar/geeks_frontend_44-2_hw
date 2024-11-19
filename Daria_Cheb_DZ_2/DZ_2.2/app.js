console.log('homework 2, task 2');

function calculateBonus(liters, cardType) {
    let bonusPerLiter;

    switch (cardType.toLowerCase()) {
        case 'серебро':
            bonusPerLiter = 0.5;
            break;
        case 'золото':
            bonusPerLiter = 0.75;
            break;
        case 'платина':
            bonusPerLiter = 1;
            break;
        default:
            console.log("Некорректный тип карты. Доступные типы: серебро, золото, платина.");
            return;
    }

    let totalBonus = liters * bonusPerLiter;
    console.log(`Ваши бонусы: ${totalBonus}`);
}

let liters = prompt("Введите количество литров бензина:");
let cardType = prompt("Введите тип карты (серебро, золото, платина):");

calculateBonus(Number(liters), cardType);
