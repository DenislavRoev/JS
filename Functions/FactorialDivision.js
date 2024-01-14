function div(firstNum, secondNum){
    let resultFirst = firstNum;
    let resultSecond = secondNum;
    for (let i = firstNum-1; i > 1; i--){
        resultFirst = resultFirst * i;
    }
    for (let i = secondNum-1; i > 1; i--){
        resultSecond = resultSecond * i;
    }
    console.log((resultFirst/resultSecond).toFixed(2));
}
