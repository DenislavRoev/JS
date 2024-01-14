function matrix(n){
    let str = String(n) + " ";
    for (let i = 0; i < n; i++){
        console.log(str.repeat(n-1) + str);
    }
}
matrix(7);