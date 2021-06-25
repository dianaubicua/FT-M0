// JS 1
function agregarPuntosSuspensivos(str) {
    // Agrega puntos supensivos al final de la string "str" y devuelve una nueva string
    // Ejemplo: "hello world" pasaría a ser "hello world..."
    // Tu código:
    console.log( str + "...");
}

agregarPuntosSuspensivos("Rami")

function presentacion(nombre, apellido) {
    // Devuelve un texto con la forma: "Hola, mi nombre es 'nombre' 'apellido'"
    // Tu código:
    console.log( "Hola, mi nombre es " + nombre  + " " + apellido) ;
}

presentacion("Dario", "himo")

// JS 2
function esTresOSeis(numero) {
    // Devuelve "true" si "numero" es 3 o 6
    // De lo contrario, devuelve "false"
    // Tu código:
    if(numero  === 3 || numero === 6) { 
        return true;
    }
    else return false;
}

function estaEnRango(numero) {
    // Devuelve "true" si "numero" es menor que 20 y mayor que 10
    // De lo contrario, devuelve "false"
    // Tu código:
    if (numero < 20 && numero > 10) {
        return true
        }
        else {
        return false
        }        
}


//js 3
function devolverUltimoElemento(array) {
    // Devuelve el último elemento de un array
    // Tu código: 
    return array[array.length - 1]
}

function obtenerLargoDelArray(array) {
    // Devuelve el largo de un array
    // Tu código:
    return array.length;
}

obtenerLargoDelArray([2, 1, 3])  --> 3


// JS 4
function crearPersona(nombre, apellido, edad) {
    // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
    // Agrega una propiedad al objeto con el nombre "apellido" y usa el valor definido en el argumento "apellido"
    // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
    // Agrega un método (funcion) llamado "saludar" que devuelva el string "Hola!"
    // Devuelve el objeto
    // Tu código:
    var obj = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        saludar: function() {
            return  "Hola!";
        }
    }
    return obj;
}

// var obje = {
//     nombre: "Wan",
//     apellido: "Cirone",
//     edad: 28
// }

function esDoctorOpaciente(persona) {
    // Si la persona tiene una propiedad "esDoctor" seteada en true, devuelve el string: "Es doctor"
    // Caso contrario, devuelve "Es Paciente"
    // Tu código:
    if (persona["esDoctor"] === true) {
        return "Es doctor" ;
    }    
    else {
        return "Es Paciente";
    }
}

esDoctorOpaciente(persona1)
esDoctorOpaciente(persona2)

var persona1 = {
    nombre: "Wan",
    apellido: "Cirone",
    edad: 28,
    esDoctor: false
}

var persona2 = {
    nombre: "Toni",
    apellido: "Tralice",
    edad: 20,
    esDoctor: true
}


// 2 formas: 

// 1) función constructora y prototype
// 2) class --> sintaxis de ECMAScript 6

// JS 5
//Crear una función constructora "Car" que cree objetos de la forma:
// {marca: "marca", puertas: NUMBER, color: color}
// var gol = new Car(vw, 3, rojo)
// var obj = {marca : vw}
// this.marca = vw ---- obj.marca= vw
// return {marca : vw, puertas: 3, color: rojo}
// Tu código:

function Car(marca, numeroDePuertas, color) {
    this.marca = marca;
    this.puertas = numeroDePuertas;
    this.color = color;
}

Car.prototype.encenderMotor = function() {
    return "BRRRRMM!";
}

Car.prototype.quieroSaberLaMarca = function() {
    return this.marca;
}

var gol = new Car(vw, 3, rojo)  --> // Creando una nueva instancia de Car.

gol.encenderMotor()
gol.quieroSaberLaMarca()  --> "vm"

gol.metodoNuevo = function() {
    return "Esto es un método de prueba"
}
gol.metodoNuevo()

var auto = new Car("a", 2, "azul")
auto.quieroSaberLaMarca() --> "a"

auto.metodoNuevo() 

//-----------------------------------------------------------------------//

class Car {
    constructor(marca, numeroDePuertas, color) {
      this.marca = marca;
      this.numeroDePuertas = numeroDePuertas;
      this.color = color;
      this.piezas = []
    }

    quieroSaberLaMarca() {
        return this.marca;
    }
    metodoNuevo() {
        return "Esto es un método de prueba"
    }
}

var auto2 = new Car("", "0", "")
auto2.encenderMotor()
auto2.quieroSaberLaMarca()

Car.prototype.metodoDePrueba = function() {...}


-------------------------------------

class Form {
    constructor(infodelalumno, fechaDelChallenge) { 
        this.alumno = infodelalumno;
        this.fecha = fechaDelChallenge
    }
}






//Agregar un método al prototype de la clase car que se llame "encenderMotor" y que
// retorne el string "BRRRRMM!"
// Tu código:



//Agregar un método al prototype de la clase car que se llame "deQueColor" y que
// retorne el string "el color del auto es: 'color'"
// Tu código:




//JS 6
function mapea(arrayDeStrings) {
    // Crea un nuevo array
    // Itera sobre cada valor en "arrayDeStrings", y concaténale un signo de exclamación
    // El nuevo array debe tener la misma longitud que el array del argumento
    // retorna el nuevo array
    // ["hola", "chau"] ---- ["hola!", "chau!"]
    //Tu código:
}

function filtrar(array) {
    //Filtrar todos los elementos del array que sean mayor a 5
    //Devolver un nuevo array con los elementos que cumplen la condición
    //Tu código:

}



//FOR IN
//Tenemos un objeto auto y queremos buscar todas sus características. Las devolvemos concatenadas como un string. 
//Ej: Devuelve --> "Renault Clio Rojo"
var objeto = {
    marca: "Renault",
    modelo: "Clio", 
    color: "Rojo"
};

var coche = "";

//Bucle for que recorre las propiedades del objeto
function recorrerObjeto(obj) { 
    for (var propiedad in objeto) {
      coche = coche + " " + objeto[propiedad] 
    }
    return coche;
}

// [2, 1, 3, 10]
//  0  1  2   3
//  i

function test() { 
    switch ("cerezas") {
        case 'Naranjas':
        console.log('El kilogramo de naranjas cuesta $0.59.');
        break;
        case 'Manzanas':
        console.log('El kilogramo de manzanas cuesta $0.32.');
        break;
        case 'Platanos':
        console.log('El kilogramo de platanos cuesta $0.48.');
        break;
        case 'Cerezas':
        console.log('El kilogramo de cerezas cuesta $3.00.');
        break;  //----------------------------------------------------------
        case 'Mangos':
        case 'Papayas':
        console.log('El kilogramo de mangos y papayas cuesta $2.79.');
        break;
        default:
        console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
    }
  
  console.log("¿Hay algo más que te quisiera consultar?")

}