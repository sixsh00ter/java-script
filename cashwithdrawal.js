let accnumber = 45645677
let balance = 100
let pinNum = 1234

const cashWithdrawal = (amount,accnum) =>{
    console.log(`withdrawing ${amount} from ${accnum}`);
}
cashWithdrawal(50, accnumber)

const whichAcc =(acc) =>{
    console.log(`the account number ${acc}`);
} 
if (pinNum && balance && accnumber == false){
    console.log("cash dispense");
    pinNum , balance , accnumber = true;
}else{
    console.log("not enough funds");
    pinNum , balance , accnumber = false;

}
