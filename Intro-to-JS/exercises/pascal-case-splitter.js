
function pascalCaseSplitter(text) {
    let result = [];
    if (text.length > 0) {
        let currentWord = text[0];
        text = text.slice(1);
        
        for (const letter of text) {
            let asciiCode = letter.charCodeAt();
            if (asciiCode >= 65 && asciiCode <= 90) {
                result.push(currentWord);
                currentWord = "";
                currentWord = letter;
            } else {
                currentWord += letter;
            }
        }
        result.push(currentWord)
    }
    return result.join(', ');
}


console.log(pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan'));
console.log(pascalCaseSplitter('ThisIsSoAnnoyingToDo'));