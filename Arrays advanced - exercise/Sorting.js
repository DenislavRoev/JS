function sorting(input){
    let arrSorted = input.sort((a,b) => b-a);
    let result = [];
    if (input.length % 2 == 0){
            let b = input.length-1;
            for(let a = 0; a < input.length/2; a++){
                result.push(arrSorted[a]);
                result.push(arrSorted[b]);
                b--;
            }
        }
    else if (input.length % 2 != 0){
            let b = input.length-1;
            for(let a = 0; a < input.length/2; a++){
                result.push(arrSorted[a]);
                result.push(arrSorted[b]);
                b--;
            }
            result.pop();
        }
    console.log(result.join(" "));
}


