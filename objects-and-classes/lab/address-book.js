function solve(objInput) {
    let addressBook = {};

    for (let line of objInput) {
        let [ name, address] = line.split(':');
        addressBook[name] = address;
    }

    let sortedNames = Object.keys(addressBook);
    sortedNames.sort((nameA, nameB) => nameA.localeCompare(nameB));

    for (const name of sortedNames) {
        console.log(`${name} -> ${addressBook[name]}`)
    }
} 


solve([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);