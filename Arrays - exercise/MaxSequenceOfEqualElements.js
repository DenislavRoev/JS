function sequence(arr){
    let sum = 0;
    let tempSum = 1;
    let result = [];
    for (let i = 1; i < arr.length; i++){
        if ((arr[i] == arr[i-1])){
            tempSum++;
        }
        if (tempSum > sum){
            sum = tempSum;
            for (let j = 0; j < sum; j++){
                result[j] = arr[i];
            }
        }
        if (!(arr[i] == arr[i-1])){
            tempSum = 1;
        }
    }
    console.log(result.join(" "));
}