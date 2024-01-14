function charsInRange(char1,char2){
    let code1 = char1.charCodeAt();
    let code2 = char2.charCodeAt();
    let result = [];
    let curChar = '';
    if(code1 < code2){
        for (let curCode = code1 + 1; curCode < code2; curCode++){
            curChar = String.fromCharCode(curCode);
            result.push(curChar);
        }
    }
    else{
        for (let curCode = code2 + 1; curCode < code1; curCode++){
            curChar = String.fromCharCode(curCode);
            result.push(curChar);
        }
    }
    console.log(result.join(" "));
}