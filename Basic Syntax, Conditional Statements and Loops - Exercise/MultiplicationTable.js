function multip(num){
    let times = 1;
    let product = 0;
    while(times <= 10)
    {
        product = num * times;
        console.log(`${num} X ${times} = ${product}`);
        times++;
    }
}