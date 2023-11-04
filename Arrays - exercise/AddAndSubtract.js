function change(arr){
    let oldSum = 0;
    let newSum = 0;
    for (let number of arr){
        oldSum += number;
    }
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] % 2 == 0)
        {
            arr[i] += i;
        }
        else{
            arr[i] -= i;
        }
    }
    for (let number of arr){
        newSum += number;
    }
    console.log(arr);
    console.log(oldSum);
    console.log(newSum);
}