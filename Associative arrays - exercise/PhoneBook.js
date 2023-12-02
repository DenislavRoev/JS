function phoneBook(input){
    let book = {};
    for (let i = 0; i < input.length; i++){
        let temp = input[i].split(" ");
        book[temp[0]] = temp[1];
    }
    for (let [person, number] of Object.entries(book)){
        console.log(person + " " + number);
    }
    console.log(book);
}