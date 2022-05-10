let impar = 0
function noParesDeContarImparesHasta(numero){
    for (let i = 0; i<numero; i++){
    if (i % 2 != 0)
    impar = impar + 1
    }
    
    
    console.log (impar)
}

noParesDeContarImparesHasta (10)