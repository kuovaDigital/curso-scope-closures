'use strict'
function moneyBox(){
    let saveCoins = 0;
    function addCoins(coins){
        saveCoins += coins;
        console.log(`Money Box: $${saveCoins}`)
    } 
    return addCoins;   
}

const myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(2);
myMoneyBox(3);