

// Constructores

function Seguro (marca , year, tipo){
    this.marca = marca;
    this.year = year;
    this.this = tipo;
}

// Realizar la cotizacion con los datos
Seguro.prototype.cotizarSeguro = function(){
    /* 
        1 = Americando 1.15
        2 = Asiatico  1.05
        3 = Europeo  1.35
    */

        let cantidad; 
        const base = 2000;

    switch (this.marca) {
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
    
        default:
            break;
    }

    // leer año
    const diferencia = new Date().getFullYear() - this.year;
    // Cada año que la diferencia es mayor el costo se reduce un 3% el costo
    cantidad -= ((diferencia * 3) * cantidad) / 100 ;


    /* 
        Si el seguro es basico se multiplica por 30% mas
        Si el seguro es completo se multiplica por 50% mas
    */

    if (this.tipo === 'basico'){
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50;
    }

    return cantidad;
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
    const seguro = new Seguro(marca, year, tipo);
    seguro.cotizarSeguro();

    // Utiliza Prototype que va a cotizar
}