function equalSum(arr){
    let leftSum = 0;
    let rightSum = 0;
    let result = false;
    for (let i = 0; i < arr.length; i++){
        for (let j = i - 1; j >= 0; j--){
            leftSum += arr[j];
        }
        for (let k = i + 1; k < arr.length; k++){
            rightSum += arr[k];
        }
        if (leftSum == rightSum){
            console.log(i);
            result = true;
        }
        leftSum = 0;
        rightSum = 0;
    }
    if (result == false){
        console.log("no");
    }
}