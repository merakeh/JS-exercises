function meetings(inputArr) {
    let appointments = {};

    for (const line of inputArr) {
        let [ day, person ] = line.split(' ');
        
        let keys = Object.keys(appointments);
        if (keys.includes(day)) {
            console.log(`Conflict on ${day}!`);
            continue;
        }

        appointments[day] = person;
        console.log(`Scheduled for ${day}`);
    }

    for (const key in appointments) {
        console.log(`${key} -> ${appointments[key]}`);
    }
}


meetings([
    'Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'
])