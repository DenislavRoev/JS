function login(arr){
    let username = arr[0];
    let wrongAttempts = 0;
    let password = "";
    for (let i = username.length - 1; i >= 0; i--)
    {
        password += username[i];
    }
    for (let i = 1; i < arr.length; i++)
    {
        if(arr[i] == password)
        {
            console.log(`User ${username} logged in.`);
            break;
        }
        else{
            wrongAttempts++;
            if (wrongAttempts == 4)
            {
                console.log(`User ${username} blocked!`);
                break;
            }
            else{
            console.log("Incorrect password. Try again.");
            }
        }

    }
}