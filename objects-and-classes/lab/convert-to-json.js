function personInfo(firstName, lastName, hairColor) {
    let person = { name: firstName, lastName, hairColor };
    return JSON.stringify(person);
}

console.log(personInfo(
    'George', 
    'Jones',
    'Brown'
    ));

console.log(personInfo('Peter', 'Smith','Blond'));