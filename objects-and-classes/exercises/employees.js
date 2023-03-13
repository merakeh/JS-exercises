//
// ---------------------------- First way -----------------------------------
// function parseEmployees(input) {
//     let employees = {};

//     for (const employee of input) {
//         employees[employee] = employee.length;
//     }

//     for (const key in employees) {
//         console.log(`Name: ${key} -- Personal Number: ${employees[key]}`)
//     }
// }


// ------------------------------- Second way -------------------------------
// function parseEmployees(input) {
//     let employeesObject = input.reduce((data, employee) => {
//             data[employee] = employee.length;
//             return data;
//         }, {});
    
//     for (const key in employeesObject) {
//         console.log(`Name: ${key} -- Personal Number: ${employeesObject[key]}`)
//     }
// }


// -------------------------------Third way -----------------------------------
function parseEmployees(input) {
    let entries = Object.entries(input.reduce((data, employee) => {
                    data[employee] = employee.length;
                    return data;
                    }, {}))
                    .forEach(([name, length]) => 
                        console.log(`Name: ${name} -- Personal Number: ${length}`))
}




parseEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',    
    'Brendan Villarreal'
    ])