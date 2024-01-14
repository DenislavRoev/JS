function palindrome(arr){
    function stringReverse(string){
        let result = "";
        for (let i = string.length-1; i >= 0; i--){
            result += string[i];
        }
        return result;
    }
    let arrStr = [];
    for (let i = 0; i < arr.length; i++){
        arrStr[i] = String(arr[i]);
    }
    for (let i = 0; i < arrStr.length; i++){
        if (arrStr[i] == stringReverse(arrStr[i])){
            console.log(true);
        }
        else{
            console.log(false);
        }
    }
}
palindrome([123,323,421,121]);