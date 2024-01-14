function addAndSubtract(num1,num2,num3){
    function sum(num1,num2){
        return num1+num2;
    }
    function subtract(num1,num2,num3){
        return console.log(sum(num1,num2) - num3);
    }
    subtract(num1,num2,num3);
}