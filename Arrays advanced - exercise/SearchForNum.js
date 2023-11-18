function  search(nums, operations){
    let result = [];
    result = nums.slice(0,operations[0]);
    result.splice(0,operations[1]);
    let sum = 0;
    for (let i = 0; i < result.length; i++){
        if (result[i] == operations[2]){
            sum++;
        }
    }
    console.log(`Number ${operations[2]} occurs ${sum} times.`);
}
search([5, 2, 3, 4, 1, 6],[5,2,3]);