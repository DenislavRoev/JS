function bar(input){
    if (input == 100){
        console.log("100% Complete!");
        console.log("[" + "%".repeat(10) + "]");
    }
    else{
        let progress = input/10;
        console.log(`${input}% ` + "[" + "%".repeat(progress) + ".".repeat(10-progress) + "]");
        console.log("Still loading...");
    }
}

