function cedilha (n) {
    cedilha = '#'

    for (let i; i < n; i++) {
       cedilha *= cedilha
    }

    console.log(cedilha)
}

cedilha(6)