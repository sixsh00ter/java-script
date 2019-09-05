const multiplyByNineFifths = (celsius)=>{
    return celsius * (9/5);
};
const getcelsius = (fahrenheit)=>{
    return multiplyByNineFifths (celsius) -32;
};
console.log("the temperature is " + getcelsius(15) + "°F");

// output:the temperature is 59


