/*Un closure es la combinación entre una función y el ámbito léxico en el que esta fue declarada. Con esto, la función recuerda el ámbito con el cual se creó. Puedes entender los closures como: función interna + scope. Mira estos pasos:

1.- Genera una función que retorna una función interna.
2.-Esta función interna tiene un scope, el cual puede ser accedido únicamente por esta función, es decir, las variables, funciones, etc. definidas en el scope solo pueden ser accedidas por la función interna.
Como resultado, esta función interna retornada con su scope será nuestro closure.

3.- Veamos la siguiente imagen para entenderlo mejor. En la imagen FUNCTION es la función interna de la cual hablamos.*/


const myGlobal = 'global';

function myFunction(){
    const myNumber = 'Number';
    console.log(myNumber)

    function parent(){ // función interna
        const inner= 'inner';
        console.log(myNumber, myGlobal)
        function child(){
            console.log(inner, myNumber, myGlobal)
        }
        return child();
    }
    return parent();
}

myFunction();