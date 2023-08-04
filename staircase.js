let cedilha = '#'


function staircase(n) {
    let i = 0
    
    while (i < n) {
    i++
    let espacosEmBranco = ' '.repeat(n - i);
    console.log( espacosEmBranco + cedilha)
    cedilha =  cedilha + '#'

} 

}

staircase(6)