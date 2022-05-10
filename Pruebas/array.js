let notas = [1,5,8,10,9,4];

let notas100 = notas.map (function(hola){
    return hola * 10;

});

console.log (notas100)

let notasAprobadas = notas.filter(function (numero){
    return numero >= 7;
});

console.log (notasAprobadas)

let sumaNotas = notas.reduce(function(estado, numero){
    return estado + numero
})

// console.log (sumaNotas)

notas.forEach(function(valor, indice){
   console.log ("En la posicion " + indice + " tengo el valor " + valor)
})

