function join(arr1, arr2){
    let result = [];
    for (let i = 0; i < arr1.length; i++){
        if (i % 2 == 0){
            result[i] = Number(arr1[i]) + Number(arr2[i]);
        }
        else{
            result[i] = String(arr1[i]) + String(arr2[i]);
        }
    }
    console.log(result.join(" - "));
}