const division = function (a = 0, b = 0) {
    if (a == 0 || b == 0) {
        return 'No se puede dividir por cero'
    }
    return a / b;
}

module.exports = division;
