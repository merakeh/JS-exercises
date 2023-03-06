function main(charOne, charTwo) {
    let asciiCharOne = charOne.charCodeAt(0);
    let asciiCharTwo = charTwo.charCodeAt(0);
    let arrayChars = [];

    if (asciiCharOne < asciiCharTwo) {
        for (let i = asciiCharOne + 1; i < asciiCharTwo; i++) {
            arrayChars.push(String.fromCharCode(i));
        }
    } else {
        for (let j = asciiCharTwo + 1; j < asciiCharOne; j++) {
            arrayChars.push(String.fromCharCode(j));
        }
    }

    return arrayChars.join(' ');
}


console.log(main('d', 'a'));
console.log(main('#', ':'));
console.log(main('C', '#'));