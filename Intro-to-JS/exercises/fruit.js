function solve(typeFruit, grams, kiloPrice) {
    let toKilograms = grams/1000;
    console.log(`I need $${(kiloPrice * toKilograms).toFixed(2)} to buy ${toKilograms.toFixed(2)} kilograms ${typeFruit}.`);
}

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);