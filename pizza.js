let orderCount = 0;

const takeOrder = (topping, size) => {
    console.log (`pizza with ${topping} ${size}`);
    console.log (orderCount++);
}
takeOrder ( "pineapple" , ("medium size") );
takeOrder ("cheese&tomatoes" ,("large size") );