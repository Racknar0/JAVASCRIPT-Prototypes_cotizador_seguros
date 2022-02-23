

// COnstructores

function Seguro (marca , year, tipo){
    this.marca = marca;
    this.year = year;
    this.this = tipo;
}

function UI(){};


// Lena las opcioensde  los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
          min = max - 20;

    const selectYear = document.querySelector('#year');

    for ( let i = max ; i > min ; i--) {
        let option = document.createElement('OPTION')
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

// Muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {

    const div = document.createElement('DIV');

    if (tipo === 'error'){
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    // Instertar HTMl
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div , document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 2000);
}


// Instancias UI
const ui = new UI();
console.log(ui);



document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones();   //LLena el select con los años
})


eventListener();
function eventListener () {
 const formulario = document.querySelector('#cotizar-seguro');
 formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro (e) {
    e.preventDefault();

    //Leer marca seleccionada
    const marca = document.querySelector('#marca').value;
    

    //leer año selecionadpo
    const year = document.querySelector('#year').value;
    
    //leer tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;


    if (marca === '' || year === '' || tipo === ''){
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    } 

    ui.mostrarMensaje('Cotizando...', 'exito');
    

    // Instanciar el Seguro


    // Utiliza Prototype que va a cotizar
}