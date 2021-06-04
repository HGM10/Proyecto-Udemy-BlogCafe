// querySelector
const heading= document.querySelector('.header__texto h2') // 0 o 1 elementos
heading.classList.add('prueba');
heading.textContent = "Nuevo Heading";
console.log(heading);


// querySelectorAll
const enlaces= document.querySelectorAll('.navegacion a');
console.log(enlaces[0]);
// enlaces[0].textContent= 'Nuevo Texto para Enlace';

// Generar enlace 
const nuevoEnlace = document.createElement('A');
console.log(nuevoEnlace);

//Agregar href
nuevoEnlace.href= 'nuevo-enlace.html';

//Agregar texto
nuevoEnlace.textContent= 'Nuevo Enlace';

//Agregar clase
nuevoEnlace.classList.add('navegacion__enlace');

//Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

// Eventos

// console.log(1);
// window.addEventListener('load', function(){ //load espera a que si JS y los archivos que dependen del HTML estén listos
//     console.log(2);
// })

// document.addEventListener('DOMContentLoaded', function(){ // Solo espera por el HTML, pero no espera CSS o Imagenes
//     console.log(4);
// })

// console.log(3);

// Seleccionar Elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(e){
//         console.log(e);
//         e.preventDefault();
//         console.log('enviando formulario');
    
        
// })


// Eventos de Inputs y Textarea

const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// El Evento de Submit
formulario.addEventListener('submit', function(e){
    e.preventDefault();

    // Validar formulario

    const {nombre, email, mensaje} = datos;
    if( nombre === "" || email === "" || mensaje === ""){
        mostrarAlerta('Todos los campos son obligatorios', true);


        return; // Corta la ejecucion del codigo
    }
    else{
        mostrarAlerta("Se Enviaron Correctamente");
        return;
    }

    // Enviar el formulario
    console.log('Enviando Formulario');
})

function leerTexto(e){
    //console.log(e.target.value);
    
    datos[e.target.id] = e.target.value;

   //console.log(datos); 
}


// Muestra las alertas
function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    } else{
        alerta.classList.add('guardado');
    }

    formulario.appendChild(alerta);

    // Desaparezcan despues de 5 segundos
    setTimeout(() =>{
        alerta.remove();
    }, 5000);
}