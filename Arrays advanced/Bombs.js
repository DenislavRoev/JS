function bombs(sequence, bomb){
    for (let i = 0; i < sequence.length; i++){
        if (sequence[i] == bomb[0]){
            let index = i-bomb[1];
            if(index < 0){
                index = 0;
            }
            sequence.splice(index, bomb[1] * 2 + 1, 0);
        }
    }
    let sum = 0;
    for (let i = 0; i < sequence.length; i++){
        sum += sequence[i];
    }
    console.log(sum);
}