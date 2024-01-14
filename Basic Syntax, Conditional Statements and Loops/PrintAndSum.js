function sum(num1,num2){
    let sum = 0;
    let result = "";
    while(num1 <= num2)
    {
        if (num1 == num2)
        {
            result += "" + num1;
        }
        else{
            result += num1 + " ";
        }
        sum += num1;
        num1++;
    }
    console.log(result);
    console.log(`Sum: ${sum}`);
}