function distinctArr(input){
    let result = [];
    for (let i = 0; i < input.length; i++){
        for (let j = i+1; j < input.length; j++){
            if(input[i] == input[j]){
                input[j] = null;
            }
        }
    }
    for (let i = 0; i < input.length; i++){
        if (input[i] != null){
            result.push(input[i]);
        }
    }
    console.log(result.join(" "));
}
