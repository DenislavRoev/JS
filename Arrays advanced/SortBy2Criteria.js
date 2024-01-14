function sortBy2Criteria(input){
    let sortedArr = input.sort((a,b) => a.length - b.length || a.localeCompare(b));
    console.log(sortedArr.join("\n"));
}