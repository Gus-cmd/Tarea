const formulario = document.getElementById('formulario-perfil');
const inputs = document.querySelectorAll('#formulario-perfil input');

const expresiones = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    telefono: /^\d{7,15}$/
}

const campos = {
    nombre: false,
    apellido: false,
    telefono: false,
    correo: false
}


const validarFormulario = (e) => {
    switch(e.target.name) {
        case "correo":
              validarCampo(expresiones.correo,e.target,'correo');
        break;

        case "nombre":
              validarCampo(expresiones.nombre,e.target,'nombre');
        break;

        case "apellido":
            validarCampo(expresiones.apellido,e.target,'apellido');
        break;

        case "telefono":
            validarCampo(expresiones.telefono,e.target,'telefono');
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)) {
        document.getElementById(`${campo}`).classList.add('is-valid');
        document.getElementById(`${campo}`).classList.remove('is-invalid');
        campos[campo] = true;
    }
    else{
        document.getElementById(`${campo}`).classList.add('is-invalid');
        document.getElementById(`${campo}`).classList.remove('is-ivalid');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario)
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if(campos.email && campos.password) {
       window.location('index.html')
    }

})