
class Procesador {

    constructor(){

        console.log( 'instacia procesador');
    };
    setDriverName(texto) {
        this.hacker1 = texto;//.toString();
    }

    getDriverName(){
        return this.hacker1;
    }

    setNavigatorName(texto) {
        this.hacker2 = texto ; //.toString();
    }

    getNavigatorName(){
        return this.hacker2;
    }

    /* conditional 5 */
    req05_printNombre() {
        let driver = this.hacker1;
        let nav = this.hacker2;

        let texto = '';

        if (driver.length > nav.length) {
            texto = `The Driver has the longest name, it has ${
                driver.length
            } characters`;
        } else if (nav.length > driver.length) {
            texto = `Yo, navigator got the longest name, it has  ${
                nav.length
            } characters`;
        } else {
            texto = `wow, you both got equally long names,  ${
                nav.length
            } characters`;
        }

        console.log(texto);
    }

    /*6 Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N" */
    req_06_printall() {
        let driver = this.hacker1;

        let lista = driver
            .replace(/ /g, '')
            .toUpperCase()
            .split('');

        let texto = lista.join(' ');
        console.log(texto);
    }

    /** 07 Print all the characters of the navigator's name, in reverse order. ie. "nhoJ" **/
    req_07_printAllRev() {
        let nav = this.hacker2;

        let textoInverso = nav
            .replace(/ /g, '')
            .split('')
            .reverse()
            .join('');

        console.log(textoInverso);
    }

    /* 08 Depending on the lexicographic order of the strings, print: */

    req_08_ordenarLexical() {
        let lista = [
            { tipo: "driver", nombre: this.hacker1 },
            { tipo: "hacker", nombre: this.hacker2 }
        ];

        let fnOrdenar = (a, b) => {
            //TODO ver si aplica algo como localization- seguro si
            return a.nombre > b.nombre;
        };

        let listaOrdenada = lista.sort(fnOrdenar);

        let itemPosicion1 = listaOrdenada[0];

        let texto = `The ${itemPosicion1.tipo} goes first`;

        console.log(texto);
    }

    req_09_checkPalindrome(texto) {
        let textoClean = texto.toLowerCase().replace(this.getRegExNoPalabras(), '');

        let listaLetrasSinEspacio = textoClean.split('');

        let textoCleanInverso = listaLetrasSinEspacio.reverse().join('');

        return textoClean === textoCleanInverso;
    }

    

    getRegExNoPalabras() {

         /**esta es una reges muy simple, sirve para quitar caracteres que no sean alfa*/
         /* esto puede mejorarse */

        return /[\W]+/g;
    }

    /* Go to lorem ipsum generator and: */
    req_10_loremipsum(texto) {
        let textoDefault = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt mi mauris, vitae consectetur felis lobortis vel. Suspendisse posuere nibh sit amet tellus dictum tempus. Integer posuere dui ante, eu feugiat purus rutrum at. Vestibulum enim ipsum, finibus cursus libero vitae, ultricies maximus purus. Nunc pharetra congue commodo. Maecenas gravida orci ac arcu convallis, fermentum tempor mauris finibus. Vestibulum diam ipsum, rutrum sit amet posuere id, condimentum tincidunt dui. Sed rutrum metus sed erat ultrices pretium. Sed sit amet sollicitudin diam. Donec vestibulum ex sed justo rutrum vestibulum. Nunc at sapien euismod ex pharetra faucibus. Nulla pharetra eros vel nulla finibus molestie nec eget velit. Vestibulum in tincidunt enim, sit amet venenatis metus. Nam libero eros, dignissim quis felis ut, sagittis lobortis ante.

        Aenean sit amet hendrerit massa, sed auctor purus. Vivamus mollis vulputate sapien volutpat faucibus. Sed scelerisque tempus dui in lobortis. Phasellus non cursus ligula. Nullam quis lacus at urna vehicula condimentum nec sit amet augue. Aenean in tincidunt lacus, ac maximus arcu. Nullam faucibus eleifend mauris, quis pretium nisl ultricies et. Suspendisse mollis sollicitudin ligula in dictum. Phasellus sed neque sollicitudin, pellentesque orci et, iaculis arcu. Nam nisi nisi, blandit sit amet urna in, porttitor feugiat metus. Fusce risus sem, bibendum id nisi a, suscipit euismod nulla. Curabitur nec dapibus nisi. Pellentesque egestas quam eu eros venenatis pharetra vel ut purus. Proin quam elit, venenatis et dui ac, ultrices ultricies turpis. Etiam dignissim ligula non nibh convallis, sed rhoncus eros porttitor.
        
        Etiam feugiat sollicitudin justo sed fringilla. Mauris feugiat mollis metus ut consectetur. Fusce lacus urna, consequat at tristique bibendum, tristique varius dolor. Praesent a purus augue. Morbi malesuada vestibulum suscipit. Aenean finibus augue eget nisi sodales varius. Praesent ac imperdiet velit, ac fringilla quam.`;

        texto = texto || textoDefault;

        let textoClean = texto.toLowerCase().replace(this.getRegExNoPalabras(), ' ');

        textoClean = textoClean.trim();

        let listaPalabras = textoClean.split(' ');

        let numPalabas = listaPalabras.length;

        let palabraBuscada = "et";
        let numCoincidencias = listaPalabras.filter(palabra => {
            return palabra === palabraBuscada;
        }).length;

        console.log(
            `El número de palabas es ${numPalabas} y la palabra "et" aparece ${numCoincidencias} `
        );
    }

}



/*
let procesador = new Procesador();

procesador.setDriverName("bart es hacker");
procesador.setNavigatorName("liza es nav");
console.log("5---");
procesador.req05_printNombre();
console.log("6---");
procesador.req_06_printall();

console.log("7---");
procesador.req_07_printAllRev();

console.log("8---");
procesador.req_08_ordenarLexical();

console.log("9---");
let isPal = procesador.req_09_checkPalindrome(
    "A man, a plan, a canal, Panama!"
);
console.log(isPal ? "si es" : "no es");

isPal = procesador.req_09_checkPalindrome("esto no es...");
console.log(isPal ? "si es" : "no es");

console.log("10---");
procesador.req_10_loremipsum();

console.log("10---");
procesador.req_10_loremipsum("et aparece solo una vez etcetera");
*/