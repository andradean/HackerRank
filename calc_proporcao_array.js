function plusMinus(arr) {
    let positivo = 0;
    let neutro = 0;
    let negativo = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        positivo++;
      } else if (arr[i] === 0) {
        neutro++;
      } else {
        negativo++;
      }
    }
  
    const totalElementos = arr.length;
    const proporcaoPositivos = positivo / totalElementos;
    const proporcaoNegativos = negativo / totalElementos;
    const proporcaoNeutros = neutro / totalElementos;
  
    console.log(proporcaoPositivos.toFixed(6));
    console.log(proporcaoNegativos.toFixed(6));
    console.log(proporcaoNeutros.toFixed(6));
  }
  
  plusMinus([6]);
  