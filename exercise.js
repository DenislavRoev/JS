function chatLogger(arr){
    let result = [];
    function chat(msg){
        result.push(msg);
    }
    function deleteMsg(msg){
        if (result.indexOf(msg) != -1){
            result.splice(result.indexOf(msg), 1);
        }
    }
    function edit(msg, newMsg){
        if (result.indexOf(msg) != -1){
            result[result.indexOf(msg)] = newMsg;
        }
    }
    function pin(msg){
        deleteMsg(msg);
        result.push(msg);
    }
    let temp = [];
    let str = "";
    for (let i = 0; i < arr.length; i++){
        str = arr[i];
        temp = str.split(" ");
        if(temp[0] == "end"){
            break;
        }
        if (temp[0] == "Chat"){
            chat(temp[1]);
        }
        if (temp[0] == "Delete"){
            deleteMsg(temp[1]);
        }
        if (temp[0] == "Edit"){
            edit(temp[1], temp[2]);
        }
        if (temp[0] == "Pin"){
            pin(temp[1]);
        }
        if (temp[0] == "Spam"){
            for (let j = 1; j < temp.length; j++){
                result.push(temp[j]);
            }
        }
    }
    for (let element of result){
        console.log(element);
    }
}
chatLogger([
    'Chat Hello',
    'Chat darling',
    'Edit darling Darling',
    'Spam how are you',
    'Delete Darling',
    'end'
  ])