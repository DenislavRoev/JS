function train(input){
    let wagons = [];
    wagons = input[0].split(" ");
    wagons = wagons.map(Number);
    let maxCapacity = Number(input[1]);
    let temp = [];
    let passengers;
    for (let i = 2; i < input.length; i++){
        temp = input[i].split(" ");
        if (temp.length > 1){
            passengers = Number(temp[1]);
            wagons.push(passengers);
        }
        else{
            passengers = Number(temp[0]);
            for (let j = 0; j < wagons.length; j++){
                if (wagons[j] + passengers <= maxCapacity){
                    wagons[j] += passengers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "));
}