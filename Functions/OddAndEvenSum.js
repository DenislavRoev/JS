function sum(num){
    let stringNum = String(num);
    let oddSum = 0;
    let evenSum = 0;
    let temp = 0;
    for (let i = 0; i < stringNum.length; i++){
        temp = Number(stringNum[i]);
        if(temp % 2 == 0){
            evenSum += temp;
        }
        else{
            oddSum += temp;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}