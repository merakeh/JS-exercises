
function modernTimes(text) {
    // Split words to make an array
    let words = text.split(" ");
    let result = [];

    // For each word check if it starts with a '#' and if it;s a valid word
    for (const word of words) {
        if (word.startsWith('#') && word.length > 1 && isValidWord(word)) {
            // Collect all words that match the conditions and take it without the # (.slice(1))
            result.push(word.slice(1));
        }
    }

    console.log(result.join('\n'));


    // Create a validation function 
    function isValidWord(myWord) {
        // Get the word without the # symbol and turn it to lowercase
        let myWordLowerCase = myWord.toLowerCase().slice(1);
        let isValid = true;

        // Check if each symbol is indeed a letter by using ASCII codes
        for (const symbol of myWordLowerCase) {
            let asciiCode = symbol.charCodeAt(0);
            if (asciiCode < 97 || asciiCode > 122) {
                isValid = false;
                break;
            }
        }

        return isValid;
    }
}

modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');