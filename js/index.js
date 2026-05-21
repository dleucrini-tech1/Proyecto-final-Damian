


console.log("Hola");

let nombre = "Damian";

console.log (nombre);

console.log("Hola" +nombre);
let numero1 = 1500;
let numero2 = 1200;


let nombres = ["Damian", "Juan","Pedro"];



nombres.push("Damian");

console.log (nombres);


nombres.unshift("Nino");

console.log(nombres);


function saludar (nombre) {

    console.log("hola "+ nombre)

}

saludar("Damian");

function Turnos (fecha, hora, nombre) {

    console.log("hola "+ nombre + " tenes un turno el dia "+ fecha+ " a las"+hora);

}

Turnos("16/04","15:00","juan");


function Turnos (fecha, hora, nombre) {

    return("hola "+ nombre + " tenes un turno el dia "+ fecha+ " a las"+hora);

}


let mensaje = Turnos("16/04","15:00","mauro");
console.log(mensaje)


function cuadrado(numero){

console.log(numero*numero);

}

cuadrado(5);


function suma(precio, cantidad){

console.log(precio*cantidad);


}

suma(500, 25);

function zapatilla(zapatilla, precio){

console.log("botas "+ 500 );


}

zapatilla(500)


function zapatilla(producto, precio){

console.log("producto " + producto +" precio: " +precio );


}

zapatilla("zapatilla" , 500)



let hola = "hola";
let nombre5 = "federico";
let edad = "45";
let cuidad = "mendoza";

console.log("hola "+ nombre5 + " tengo "+edad+ " soy de "+cuidad  )




let numero11 = 10;
let numero12 = 5;

console.log(numero11 + numero12 )

console.log(numero11*numero12)

console.log(numero11-numero12)


let carrito= ["Zapatillas","Remera", "Gorra"]

console.log (carrito);



let carritos= ["Zapatillas","Remera", "Gorra"]

carritos.push("pantalon");

console.log(carritos);



let carrito1= ["Zapatillas","Remera", "Gorra"]

carrito1.unshift("guantes");

console.log(carrito1);


let carrito2= ["Zapatillas","Remera", "Gorra"]

carrito2.splice(1,0,"sombrero");

console.log(carrito2);


// let cartelito = document.querySelector("#titulo");

// cartelito.textContent="hola damian";

// console.log(cartelito);






let productos =["manzanas" , "peras", "Zanahoria" ];

productos.forEach(prod =>{
    console.log(prod);

});


let cartelito = document.querySelector("#titulo");

cartelito.addEventListener("click", () =>{

    
cartelito.textContent="hola damian";

})


// let botonform = document.querySelector("#btncontacto");

// botonform.addEventListener("submit", (e) =>{

//     e.preventDefault();

// let nombre = document.querySelector("#usuario").value;

// let contrasena = document.querySelector("#contrasena").value;

// console.log (`nombre: ${nombre} contraseña: ${contrasena}`);

// })


let nombree = "Damian";

if (nombree === "Daman") {
    console.log ("EL nombre es Damian")
}else{ 
    console.log("EL nombre no Damian")

}


let nombreer = "34";

if (nombreer === "34") {
    console.log ("Es igual")
}else{ 
    console.log("No ")

}



let nombrees = "Damian";

if (nombrees === "Daman"|| nombre ==="Damian") {
    console.log ("EL nombre es MAuro o Damian")
}else{ 
    console.log("Ninguno de los nombres MAuro o Damian")

}




let nommero = 7;

if (nommero > "5" ) {
    console.log ("mayor a 5")
}else{ 
    console.log("es menor o igual a 5 ")

}



let Nombreee = " ddd";

if (Nombreee === " ") {
    console.log ("Falta Nombre")
}else{ 
    console.log("Nombre incorrecto ")

}


let Carro = ["Media, apatillas"];

if (Carro.length === 0) {
    console.log ("Carrito Vacio")
}else{ 
    console.log("Hay Productos ")

}





let nommeroo = 1    

if (nommeroo > 10 ) {
    console.log ("mayor a 10")

    } else if(nommeroo >5 ){ 
      console.log("mayor a 5")  

}else{ 
    console.log("5 o menos ")

}





let total = 2100;    

if (total > 2000 ) {
    console.log ("Descuanto 20% ")

    } else if(total >1000 ){ 
      console.log("Descuanto 10% ")  
      
}else{ 
    console.log("sin Descuento ")

}



let mes = "Noviemb";    

if (mes === "Enero" ||mes ==="Febrero" || mes ==="Marzo" ) {
    console.log ("Primer Trimestre" )

    } else if(mes === "Abril" ||mes ==="Mayo" ||mes === "Junio" ){ 
      console.log("Segundo Trimestre")  
      
         } else if(mes === "Julio" ||mes ==="Agosto" || mes ==="Septimbre" ){ 
      console.log("tercer Trimestre" )  
      
           } else if(mes === "Octubre" ||mes ==="Noviembre" || mes ==="Diciembre" ){ 
      console.log("cuarto Trimestre" ) 

}else{ 
    console.log("Ingrese mes valido ")

}

let opcionn = 3

switch (opcionn) {
    case 1:
        console.log("Opcion 1")
        break;
    case 2:
        console.log("Opcion 2")
        break;
    case 3:
        console.log("Opcion 3")
        break;

    default:

    console,log("NO ha ingresado una opcíon valida")
        break;
}




let Meess = "s"

switch (Mees) {
    case "Enero" :
        console.log("Primer Trimestre")
        break;
    case "Febrero":
        console.log("Primer Trimestre")
        break;
    case "Marzo":
        console.log("Primer Trimestre")
        break;
      case "Abril":
        console.log("Segundo Trimestre") 
        break;
         case "Mayo":
        console.log("Segundo Trimestre") 
        break;
         case "Junio":
        console.log("Segundo Trimestre") 
        break;
         case "Julio":
        console.log("tercer Trimestre") 
        break;
         case "Agosto":
        console.log("tercer Trimestre") 
        break;   

             case "Septiembre":
        console.log("tercer Trimestre") 
        break;   
     case "Octubre":
        console.log("cuarto Trimestre") 
        break;   
     case "novimbre":
        console.log("cuarto Trimestre") 
        break;   
     case "Diciembre":
        console.log("cuarto Trimestre") 
        break;   
 

    default:

    console.log("NO ha ingresado una opcíon valida")
        break;
}










