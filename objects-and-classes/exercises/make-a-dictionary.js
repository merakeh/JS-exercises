function solve(inputText) {
    let dictOfTerms = {};

    for (const term of inputText) {
        let obj = JSON.parse(term);
        for (const key in obj) {
            dictOfTerms[key] = obj[key];
        }
    }

    let sortedDict = Object.keys(dictOfTerms).sort((termA, termB) => termA.localeCompare(termB));

    for (const term of sortedDict) {
        console.log(`Term: ${term} => Definition: ${dictOfTerms[term]}`)
    }
}



solve(
    [
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road typically one serving the public on a fixed route and for a fare."}', 
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}', 
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',     
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}' 
    ]
)