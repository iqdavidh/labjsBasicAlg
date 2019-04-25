function rowSumOddNumbers(n) {
    if (n === 1) {
        return 1;
    }

    function getListaNumNivel(indexNivel, valorIni) {
        if (indexNivel === 1) {
            return [1];
        }

        let row = [];
        let valor = valorIni + 2;
        for (let i = 1; i <= indexNivel; i++) {
            row.push(valor);
            valor += 2;
        }

        return row;
    }

    let valorIni = 1;
    let listaRows = [[1]];

    

    for (let index = 2; index <= n; index++) {
        

        let newRow = getListaNumNivel(index, valorIni);

        listaRows.push(newRow);

        valorIni = newRow[newRow.length - 1];

    }

    let ultimoRow=listaRows[listaRows.length-1];
    suma=ultimoRow.reduce( (x,total)=>{
            return x+total;
        });
        
    //console.log(JSON.stringify(listaRows));   
    return suma;
}

console.log(rowSumOddNumbers(1));
console.log('**********************');
 console.log(rowSumOddNumbers(2));
 console.log('**********************');
 console.log(rowSumOddNumbers(3));
 console.log('**********************');
 console.log(rowSumOddNumbers(4));
 console.log('**********************');