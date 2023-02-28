
function solve(namesList) {
    namesList.sort();

    for (let i = 0; i < namesList.length; i++) {
        console.log(`${i + 1}.${namesList[i]}`);
    }
}

solve(["John","Bob","Christina","Ema"]);
