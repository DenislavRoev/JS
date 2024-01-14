function passwordValidator(password){
    let errors = 0;
    if (password.length < 6 || password.length > 10){
        console.log("Password must be between 6 and 10 characters");
        errors++;
    }
    for (let i = 0; i < password.length; i++){
        let character = password[i].charCodeAt();
        if ((character >=  48 && character <= 57) || (character >= 65 && character <= 90) || 
        (character >= 97 && character <= 122)){
            //valid
        }
        else{
            console.log("Password must consist only of letters and digits");
            errors++;
            break;
        }
    }
    let sum = 0;
    for (let i = 0; i < password.length; i++){
        let character = password[i].charCodeAt();
        if (character >= 48 && character <= 57){
            sum++;
        }
    }
    if (sum < 2){
        console.log("Password must have at least 2 digits");
        errors++;
    }
    if (errors == 0){
        console.log("Password is valid");
    }
}
passwordValidator("Pa$s$s");