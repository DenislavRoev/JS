function tracker(input){
    let keys = input[0].split(" ");
    let result = {};
    for (let i = 0; i < keys.length; i++){
        let counter = 0;
        let first = keys[i];
        result[first] = counter;
        for (let j = 1; j < input.length; j++){
            let second = input[j]
            if (first == second){
                counter++;
                result[first] = counter;
            }
        }
    }
    let sorted = Object.entries(result);
    sorted.sort((a,b) => b[1] - a[1]);
    for (let entry of sorted){
        console.log(`${entry[0]} - ${entry[1]}`);
    }
}
