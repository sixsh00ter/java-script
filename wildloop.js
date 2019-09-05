let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "";
while(currentCard != "Spade"){
 console.log(currentCard);
 currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard);