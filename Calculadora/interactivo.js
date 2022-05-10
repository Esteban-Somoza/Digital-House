const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Elegi una operación? ', function (op) {
    rl.question('Indique el primer valor? ', function (a) {
        rl.question('Indique el segundo valor? ', function (b) {
            let resultado = null;

            if (op === 'sumar') {
                resultado = sumar(Number(a), Number(b));
            }

            if (op === 'restar') {
                resultado = restar(Number(a), Number(b));
            }

            if (op === 'multiplicar') {
                resultado = multiplicar(Number(a), Number(b));
            }

            if (op === 'dividir') {
                resultado = dividir(Number(a), Number(b));
            }

            if (resultado !== null) {
                console.log('El resultado de la operación es', resultado);
            } else {
                console.log('Operación no válida');
            }

            rl.close();


        });
    });
});