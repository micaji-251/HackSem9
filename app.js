
// 1. Crea un programa que al ingresar un número diga si es positivo o negativo. 

function positive(){
    let myNumber = prompt("Ingrese un numero");
    if(myNumber>=0){
        console.log('El numero es positivo');
    } else {
        console.log('El numero es negativo');
    }
}

// positive();

// 2. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor.

function comparar(){
    let myNumber = prompt("Ingrese primer numero");
    let myNumber2 = prompt("Ingrese segundo numero");

    if(myNumber>myNumber2){
        console.log('El numero ' + myNumber + ' es mayor que el numero ' + myNumber2 );
    } else {
        console.log('El numero ' + myNumber2 + ' es mayor que el numero ' + myNumber );
    }
}

// comparar();

// 3. Solicitar al usuario un número, y determinar si es divisible entre dos o no. “x número es divisible entre 2” o “x número no es divisible entre 2”



function par(){
    let myNumber = prompt("Ingrese un numero");
    if(myNumber % 2 === 0){
        console.log('El numero ' + myNumber + ' es divisible entre 2');
    } else {
        console.log('El numero ' + myNumber + ' no es divisible entre 2');
    }
}

// par();



// 4. Calcular la factorial de un número: 

function factorial(){
    let myNumber = prompt("Ingrese un numero");
    let resultado = 1;

    for(let i=1; i<= myNumber; i++){
        resultado = i * resultado
    }

    console.log(resultado);
}

// factorial();

// 5. Escriba un programa en JavaScript de un bucle que itere del 1 al 15. Para cada iteración, verifica si el número actual es impar o par, y muestra un mensaje en la pantalla. 

function quinceiteraciones(){
    for(i=1;i<=15;i++){
        if(i % 2 === 0){
            console.log('El numero ' + i + ' es divisible entre 2');
        } else {
            console.log('El numero ' + i + ' no es divisible entre 2');
        }
    }
}

// quinceiteraciones();

// 6. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.

function loteria(){
    let myNumber = Number(prompt("Ingrese primer numero para la loteria"));
    let myNumber2 = Number(prompt("Ingrese segundo numero para la loteria"));

    for(i=1;i<=50;i++){
        if(i === myNumber || i === myNumber2){
            console.log( i + ' ¡Loteria!');
        } else {
            console.log(i);
        }
    }
}

// loteria();


//  7. Escriba un programa de JavaScript que itera enteros del 1 al 100. Pero para múltiplos de tres, imprima "Fizz" en lugar del número y para múltiplos de cinco imprima "Buzz". Para números múltiplos de tres y cinco, imprima "FizzBuzz". 

function fizzbuzz(){
    for (i=1;i<=100;i++){
        if(i%3===0 && i%5===0){
            console.log('FizzBuzz');
        } else if(i%3===0){
            console.log('Fizz');
        } else if(i%5===0){
            console.log('Buzz');
        } else{
            console.log(i);
        }
    }
}

// fizzbuzz();

// 8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9 y, por último, “excelente” si es 10. 

function calificar(){
    let myNumber = Number(prompt("Ingrese un numero"));

    while(myNumber <1 || myNumber>10){
        alert('Error: Ingrese un numero entre 1 y 10');
        myNumber = Number(prompt("Ingrese un numero"));

    }
    
    while(myNumber >=1 && myNumber<=10){

        if(myNumber<6){
            console.log('reprobado');
        } else if(myNumber <=8){
            console.log('regular');
        } else if (myNumber === 9){
            console.log('bien');
        } else {
            console.log('excelente');
        }

        break;
    }

    
}
// calificar();

// 9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida, cuánto le costará en función del topping que elija.

function comprarHelado(){
    let choice = prompt("Escriba el topping a elegir entre las opciones: ninguno, oreo, kitkat, brownie");
    choice = choice.trim().toLowerCase();

    const PrecioOreo = 50+10;
    const PrecioKitKat = 50+15;
    const PrecioBrownie= 50+20;

    switch (choice){
        case "oreo":
            console.log('El precio del helado es ' + PrecioOreo + ' MXN');
        break;
        case "kitkat":
            console.log('El precio del helado es ' + PrecioKitKat + ' MXN');
        break;
        case "brownie":
            console.log('El precio del helado es ' + PrecioBrownie + ' MXN');
        break;

        default:
            console.log('No tenemos este topping, lo sentimos. El precio del helado es ' + 50 + ' MXN');
    }
}

// comprarHelado();

// 10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida

function comprarCurso(){

    let programa = prompt("Ingresar el tipo de programa educativo: course, carrera o master");
    programa = programa.trim().toLowerCase();

    let dsct = prompt("Ingresar el dsct: facebook, google o jesua");
    dsct = dsct.trim().toLowerCase();

    let precioPrograma = 0;
    let porcentajeDsct = 0;
    let duracionPrograma=0;

    switch(programa){
        case "course":
            precioPrograma = 4999;
            duracionPrograma =2;
        break;
        case "carrera":
            precioPrograma = 3999;
            duracionPrograma =6;
        break;
        case "master":
            precioPrograma = 2999;
            duracionPrograma =12;
        break;
    }

    switch(dsct){
        case "facebook":
            porcentajeDsct = 1-0.2;
        break;
        case "google":
            porcentajeDsct = 1-0.15;
        break;
        case "jesua":
            porcentajeDsct = 1-0.5;
        break;
    }

    console.log('El precio mensual del programa es de ' + precioPrograma*porcentajeDsct);
    console.log('El precio total del programa es de ' + precioPrograma*porcentajeDsct*duracionPrograma);
}

// comprarCurso();


function pagoLitros(){
    let distancia = Number(prompt("Ingresar la distancia recorrida en kilometros"));
    let tipoVehiculo = prompt("Ingresar el tipo de vehiculo usado")
    let precioKilometro = 0;

    switch(tipoVehiculo){
        case "coche":
            precioKilometro=0.2;
        break
        case "moto":
            precioKilometro=0.1;
        break
        case "autobus":
            precioKilometro=0.5;
        break
    }

    if (distancia>=0 && distancia<=100){
        totalPagar = (distancia*precioKilometro) + 5;
    } else if (distancia >100){
        totalPagar = (distancia*precioKilometro) + 10;
    }

    console.log('El total a pagar es de ' + totalPagar);

}

// pagoLitros();


// RETO 2

// 1. Invertir un arreglo usando el bucle for:

function invertir(){
    let arreglo = [5,1,8,6,3];
    let arregloNuevo = [];

    for (i=1;i<=arreglo.length;i++){
        arregloNuevo.push(arreglo[arreglo.length-i]);
    }
    console.log(arregloNuevo);
}
// invertir();

// 2. Calcula la suma de todos los elementos de un arreglo.

function sumarArreglo(){
    let arreglo = [2, 8, 5, 3, 1];
    let suma = 0;
    for (i=0;i<=arreglo.length-1;i++){
        suma = arreglo[i] + suma;
    }
    console.log(suma);
}

// sumarArreglo();

function numeroMayor(){
    let arreglo = [4, 5, 1, 8, 3];
    numeroMayor = 0;

    for (i=0;i<=arreglo.length-1;i++){
        if(numeroMayor<arreglo[i]){
            numeroMayor=arreglo[i];
        }
    }

    console.log('El numero mayor es ' + numeroMayor);
}

// numeroMayor();


// 4. Encuentra todos los números pares de un arreglo y crear un arreglo nuevo con ellos. 

function arregloPares(){
    let arreglo = [3, 4, 5, 12, 6, 1];
    let arregloPar = [];

    for (i=0;i<=arreglo.length-1;i++){
        if (arreglo[i]%2===0){
            arregloPar.push(arreglo[i]);
        }
    }

    console.log(arregloPar);

}

// arregloPares();


// 5. Escriba un programa en JavaScript para mostrar el nombre del libro y el nombre del autor de los libros que tengan el estado de lectura “true”. 


const library = [ 
    { 
    author: 'Bill Gates', 
    title: 'The Road Ahead', 
    readingStatus: true, 
    }, 
    { 
    author: 'Steve Jobs', 
    title: 'Walter Isaacson', 
    readingStatus: true, 
    }, 
    { 
    author: 'Suzanne Collins', 
    title: 'Mockingjay: The Final Book of The Hunger Games', 
    readingStatus: false, 
    }, 
    ];

for (i=0;i<=library.length-1;i++) {
    if (library[i].readingStatus===true){
        console.log('author: ' + library[i].author + '\ntitle: ' + library[i].title + '\n' );
    }
}






