let coffeeIsGrinding = false;

const PressGrindBeans =() => {
    if (coffeeIsGrinding == true) {
        console.log("stopping the grinder");
        coffeeIsGrinding = false;
    }else{
        console.log("grinding is about to begin");
        coffeeIsGrinding = true;
    }
}
PressGrindBeans();