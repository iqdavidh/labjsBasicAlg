function findOdd(lista) {
    if (lista.length === 0) {
        return null;
    }

    if (lista.length === 1) {
        return lista[0];
    }
    

    let dicContador = {};
    let listaNumerosUnicos = [];

    lista.forEach(numero => {
        if (dicContador[numero] === undefined) {
            dicContador[numero] = {
                numero: numero,              
                repeticiones: 0
            };
            listaNumerosUnicos.push(numero);
        }

        dicContador[numero].repeticiones++;
    });

   

    let itemContador = null;
    listaNumerosUnicos.forEach(numero => {
        if (dicContador[numero].repeticiones % 2 !== 0) {
            itemContador = dicContador[numero];
        }
    });


    console.log(JSON.stringify(itemContador));
    //happy coding!
    return itemContador.numero;
}

console.log("******************");
let x = findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]);
console.log(x);
