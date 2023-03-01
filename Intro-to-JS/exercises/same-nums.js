
function sameNumbers(num) {
    let numAsString = num.toString();
    let isValid = true;
    let result = 0;

    for (const letter of numAsString) {
        if (letter !== numAsString[0]) {
            isValid = false;
            break;
        }
    }

    for (let el of numAsString) {
        el = Number(el);
        result += el;
    }

    console.log(isValid);
    console.log(result);
}


sameNumbers(2222222);
sameNumbers(1234);