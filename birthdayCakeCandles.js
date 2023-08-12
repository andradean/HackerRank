function birthdayCakeCandles(candles) {
    let maxHeight = 0;  
    let maxIndex = 0;   
    
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] > maxHeight) {
            maxHeight = candles[i];   
            maxIndex = 1;             
        } else if (candles[i] === maxHeight) {
            maxIndex++;               
        }
    }
    
    return maxIndex;  
}

console.log(birthdayCakeCandles([3, 2, 1, 3]));  
