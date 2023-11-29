function employees(names){
    for (let name of names){
        let employee = {
            employeeName: name,
            personalNum: name.length
        };
        console.log(`Name: ${employee.employeeName} -- Personal Number: ${employee.personalNum}`);
    }
}
