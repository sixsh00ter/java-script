const minus = (fahrenheit)=>{
    return fahrenheit -32
}
const inCelsius =(fahrenheit) => {
    return Math.floor(minus(fahrenheit) *5/9)
}
console.log(`the tempertature in celsius is ${inCelsius(70)}`)