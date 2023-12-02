function calendar(input){
    let calendar = {};
    for (let meeting of input){
        let [day, person] = meeting.split(' ');
        if (calendar.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
            continue;
        }
        calendar[day] = person;
        console.log(`Scheduled for ${day}`);
    }
    for (let [day, person] of Object.entries(calendar)){
        console.log(`${day} -> ${person}`);
    }
}
