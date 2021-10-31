import { autos } from "./autoClass.js";

// se agregan variales
let  marca = getElementById("#marca") ;
let modelo = getElementById("#modelo");
let codigo = getElementById("#codigo");
let descripcion = getElementById("#descripcion");
let imagen = getElementById("#imagenUrl");
let formulario = getElementById("#formularioAutos");
let arregloAutos= [];


function agregarAuto(){
    // se agrega un nuevo vehiculo
    let autoNuevo = new autos (
        marca.value,
        modelo.value,
        codigo.value,
        descripcion.value,
        imagen.value,
 );
    console.log(autoNuevo);
    //agregar datos del auto al arreglo
    arregloAutos.push(autoNuevo);
    console.log(arregloAutos);
    //guardar datos en el localStorage
    localStorage.setItem("ListaArregloAutos", JSON.stringify(arregloAutos));
    // se debe limpiar el formulario
    limpiarFormulario();
    // se debe cargar los datos en la tabla
    crearFilasTabla(autoNuevo);
    // mostar mensaje al usuario, indicando que se agregó correcctamente

};

function limpiarFormulario(){
    formulario.reset();
    marca.className = "form-control";
    modelo.className = "form-control";
    codigo.className ="form-control";
    descripcion.className = "form-control";
    imagen.className = "form-control";
    // a continuacion se necesita la funcion editar
};


function crearFilasTabla(itemAuto) {
    let tabla = document.querySelector("#tablaAuto");
    console.log("itemAuto");
    tabla.innerHTML += `
    <tr>
                 <th scope="row">${itemAuto.marca}</th>
                 <td>${itemAuto.modelo}</td>
                 <td>${itemAuto.codigo}</td>
                 <td>${itemAuto.descripcion}</td>
                 <td>${itemAuto.imagen}</td>
 
          // aqui de deben agregar los botones editar y borrar       
     </tr>;
    `
 };
 

