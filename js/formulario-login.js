const formulario = document.getElementById('formulario-login');
const inputs = document.querySelectorAll('#formulario-login input');

const expresiones = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/
}

const campos = {
    email: false,
    password: false
}

const validarFormulario = (e) => {
    switch(e.target.name) {
        case "email":
              validarCampo(expresiones.email,e.target,'email');
        break;

        case "password":
              validarCampo(expresiones.password,e.target,'password');
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