console.log('homework 2, task 1')

let fuelNames = ["АИ-92", "АИ-95", "АИ-98", "ДТ", "Газ"];

let fuelPrices = {
    "АИ-92": 82,
    "АИ-95": 85,
    "АИ-98": 80,
    "ДТ": 72,
    "Газ": 75
};

let calculateFuel = function(amount, fuelType) {
    let pricePerLiter = fuelPrices[fuelType];
    if (!pricePerLiter) {
        console.error("Wrong type of fuel!");
        return null;
    }
    return amount / pricePerLiter;
};

let amount = prompt("Enter the amount in soms:");
let fuelType = prompt(`Enter the type of fuel (${fuelNames.join(", ")}):`);

let result = calculateFuel(amountNumber, fuelType);

switch (typeof result) {
    case "string":
        console.log(result);
        break;
    case "number":
        console.log(`You can buy ${result} liters of ${fuelType} for ${amount} soms..`);
        break;
    default:
        console.log("Unknown result.");
}