function movies(input){
    let movies = [];
    for (let str of input){
        if (str.includes("addMovie")){
            let result = str.slice(9);
            let movieObj = {
                name: "",
            }
            movieObj.name = result;
            movies.push(movieObj);
        }
        else if (str.includes("directedBy")){
            let idx = str.indexOf("directedBy");
            let movieName = str.slice(0, idx - 1);
            let directorName = str.slice(idx + 11);
            for (let obj of movies){
                if (obj.name == movieName){
                    obj.director = directorName;
                }
            }
        }
        else if (str.includes("onDate")){
            let idx = str.indexOf("onDate");
            let movieName = str.slice(0, idx - 1);
            let date = str.slice(idx + 7);
            for (let obj of movies){
                if (obj.name == movieName){
                    obj.date = date;
                }
            }
        }
    }
    for(let movie of movies){
        if (movie.date != undefined && movie.director != undefined){
            console.log(JSON.stringify(movie));
        }
    }
}

