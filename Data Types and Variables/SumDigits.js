function sumDigits(num){
    let numS = String(num);
    let sum = 0;
    for (let i = 0; i < numS.length; i++)
    {
        sum += Number(numS[i]);
    }
    console.log(sum);
}