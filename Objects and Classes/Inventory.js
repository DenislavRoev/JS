function inventory(heroes){
    let result = [];
    for (let hero of heroes){
        let arr = hero.split(" / ");
        let heroObj = {
            Hero: arr[0],
            level: Number(arr[1]),
            Items: arr[2]
        };
        result.push(heroObj);
    }
    result = result.sort((a,b) => a.level - b.level);
    for (let hero of result){
        console.log(`Hero: ${hero.Hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.Items}`);
    }
}
