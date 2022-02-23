

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

// Instancias UI
const ui = new UI();
console.log(ui);



document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones();   //LLena el select con los años
})