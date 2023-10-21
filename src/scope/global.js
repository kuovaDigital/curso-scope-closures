//  Variables

var a; // declarda

var b = 'b'; // Declarando y asignando

b = 'bb'; // reasignación

var a = 'aa'; // redeclaración

// Global Scope
// cuando declaramos una variable var, esta es accesible en el entorno global de la aplicación

var fruit = 'apple';

function bestFruit(){
    console.log(fruit)
}

bestFruit();

function countries(){
    country = 'colombia';
    console.log(country);
}
countries();
console.log(country);

// Function Scope
// El scope local de función (function scope) es el entorno donde las variables locales solo se pueden acceder desde una función de la aplicación

(function greeting(){
    let userName = 'Ana'

    if(userName === 'Ana'){
        console.log(`Bienvenida ${userName}!`)
    }
}())

//El scope local de bloque es el entorno donde las variables locales únicamente pueden ser accedidas desde un bloque de código del programa. Un bloque de código es todo aquello que está dentro de los caracteres de llaves


// En este ejemplo podremos acceder a var que es una variable de global, pero let y const son locales, por lo que no pueden ser accedidas desde fuera de su bloque

(function fruits (){
    if(true){
        var fruit1 = 'apple'
        let fruit2 = 'Banana'
        const fruit3 = 'Kiwi'
    }
    console.log(fruit1)
    console.log(fruit2)
    console.log(fruit3)
})();


// En este caso, podemos acceder a las variables por que se esta accediendo a ellas desde el mismo

(function fruits (){
    if(true){
        var fruit1 = 'apple'
        let fruit2 = 'Banana'
        const fruit3 = 'Kiwi'
        console.log(fruit2)
        console.log(fruit3)
    }
    console.log(fruit1)
})();


// Cuando declaramos una variable sin un asignar un valor, la variable sera 'undefined'


