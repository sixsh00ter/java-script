let favouriteMovies = [
    "aliens",
    "gone in 60 seconds",
    "fast and furiuos",
    "independence day",
    "matrix"
];
favouriteMovies.push("swordfish",
"chappie")
for(filmIndex = 0; filmIndex <favouriteMovies.length;filmIndex++){
    console.log(favouriteMovies[filmIndex]);
}
const filmCheck = () => {
    if (favouriteMovies[1] == "gone in 60 seconds"){
        console.log("yay its gone in 60 seconds");
    }else{
        console.log("booo try harder")
    }
};
filmCheck()