// Se generamos el ARRAY
var persona = [];

// Generamos primero la conexion al contenedor
const contenedor_persona = document.getElementById("contenedor_personas")

// Conectamos con el formulario
var formulario = document.getElementById("formulario");

// Generamos un evento al hacer submit del formulario
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se recargue la página al enviar el formulario

    // Se toman el valor que hay en el formulario
    var nombre_tomado = document.getElementById("nombre").value;
    var email_tomado = document.getElementById("email").value;
    var contraseña_tomado = document.getElementById("contra").value;
    var provincia_tomado = document.getElementById("provincia").value;

    // Creamos la persona
    var nuevaPersona = {
        nombreCompletoPersona: nombre_tomado,
        emailPersona: email_tomado,
        contraseñaPersona: contraseña_tomado,
        provinciaPersona: provincia_tomado
    };

    if (leerTexto_Email(email_tomado)) {
        // Generamos un Push para que se agregue al ARRAY
        persona.push(nuevaPersona);

        // Se limpia el formulario
        limpiar_form()
    } else{
        alert("Se ingreso un correo erroneo, revisar si tiene el simbolo de @")
    }

    // Traemos la lista de personas cada vez que se agrega uno, con la funcion que creamos
    lista_persona(persona)
});

// Funcion IF para mostra un texto si no hay personas registradas
if (persona.length == 0) {
    contenedor_persona.innerHTML = `
    <h3 id="no_personas"> No existen personas registradas </h3>
    `
}

// -------------------------------------------------
// Funciones

// Funcion para mostrar los CARD de las personas
function lista_persona(persona){

    contenedor_persona.innerHTML = ""

    for (const item of persona) {
        contenedor_persona.innerHTML += `
        <div class="card_persona">
            <h3 class="persona_h3">
                <p class="nombre_persona">Nombre: ${item.nombreCompletoPersona}</p><br>
                Email: ${item.emailPersona}<br>
                Contraseña: ${item.contraseñaPersona}<br>
                Provincia: ${item.provinciaPersona}
            </h3>
        </div>
        `
    }

}

function limpiar_form(){
    // Limpiar los campos del form
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("contra").value = "";
    document.getElementById("provincia").value = "";
}

function leerTexto_Email(texto) {
    bandera = 0

    for (let index = 0; index < texto.length; index++) {
        if (texto[index] == "@") {
            bandera = 1
        }
    }

    if (bandera == 1) {
        return true
    }else{
        return false
    }
}