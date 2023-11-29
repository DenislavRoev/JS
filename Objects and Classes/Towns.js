function town(townInfo){
    for (let town of townInfo){
        let info = town.split(" | ");
    let lat = Number(info[1]);
    lat = lat.toFixed(2);
    let long = Number(info[2]);
    long = long.toFixed(2);
    let result = {
        town: info[0],
        latitude: lat,
        longitude: long
    };
    console.log(result);
    }
}
