function top(arr1){
    let result = [];
    let sum = 0;
    for(let i = 0; i < arr1.length; i++){
        for (let j = i+1; j < arr1.length; j++){
            if (arr1[i] <= arr1[j]){
                sum++;
            }
        }
        if(sum == 0){
            result.push(arr1[i]);
        }
        sum = 0;
    }
    console.log(result.join(" "));
}