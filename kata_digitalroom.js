function digital_root(numero) {
    if (numero < 10) {
        return numero;
    }

    let listaNumeros = numero
        .toString()
        .split("")
        .map(item => {
            return parseInt(item);
        });

    let suma = listaNumeros.reduce((total, item) => {
        return total + item;
    });

    if (suma < 10) {
        return suma;
    } else {
        return digital_root(suma);
    }
}

digital_root(132189);
