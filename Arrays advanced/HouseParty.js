function partyList(input){
    let temp = [];
    let result = [];
    let errorList = [];
    for (let i = 0; i < input.length; i++){
        temp = input[i].split(" ");
        if (temp[2] == "going!"){
            if (result.includes(temp[0])){
                errorList.push(`${temp[0]} is already in the list!`);
            }
            else{
                result.push(temp[0]);
            }
        }
        else if (temp[2] == "not"){
            if (result.includes(temp[0])){
                result.splice(result.indexOf(temp[0]), 1);
            }
            else{
                errorList.push(`${temp[0]} is not in the list!`)
            }
        }
    }
    console.log(errorList.join("\n"));
    console.log(result.join("\n"));
}

