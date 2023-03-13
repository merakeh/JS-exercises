function phoneBook(myArr) {
    let phonebook = {};

    for (const position of myArr) {
        let [ name, phoneNum ] = position.split(' ');
        phonebook[name] = phoneNum;
    }

    for (const key in phonebook) {
            console.log(`${key} -> ${phonebook[key]}`);
        }
    }


phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
    );
    

phoneBook(
    ['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']
)