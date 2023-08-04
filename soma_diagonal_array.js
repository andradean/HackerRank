function matriz (arr) {
    sumLeft = 0
    sumRight = 0
    
    for(i = 0; i < arr.length; i++) {
        sumLeft += arr[i][i]
        

    }
    for(i = 0; i < arr.length; i++) {
        sumRight += arr[i][arr.length - 1 - i];
        

    }
    console.log(sumLeft)
    console.log(sumRight)
}

matriz([[1, 2, 3], [4, 5, 6], [9, 8, 9]])


