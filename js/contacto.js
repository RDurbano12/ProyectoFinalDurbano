//modo oscuro:
const bdark = document.querySelector('#bdark');
const body = document.querySelector('body');

load()

bdark.addEventListener('click', e => {
    body.classList.toggle('darkmode');
    store(body.classList.contains('darkmode'));
});

function load() {
    const darkmode = localStorage.getItem('darkmode');
    if (!darkmode) {
        store('false');
    } else if (darkmode == 'true') {
        body.classList.add('darkmode');
    }
}
function store(value) {
    localStorage.setItem('darkmode', value);
}



//armado formulario:

const contenedorForm = document.getElementById("contenedorForm");
const form = document.createElement("div")
form.innerHTML = `
<h1>Contactate con nosotros</h1>
<div id="estilosForm" >
<form > 
<label>
<input type="text" id="input-nombre" placeholder="Ingrese su nombre">
</label>
<label>
<input type="text" id="input-mail" placeholder="Ingrese su mail">
</label>
<label>
<input type="number" id="edad" placeholder="Ingrese su edad">
</label>
<label>
<input type="text" id="input-mensaje" placeholder="Ingrese su mensaje">
</label>
<label>
<input type="submit" value="Enviar" >
</label>
</form> 
</div>
`
contenedorForm.appendChild(form);


///////////Validacion de datos/////////////
const nombre = document.getElementById("input-nombre");
const mail = document.getElementById("input-mail");
const mensaje = document.getElementById("input-mensaje");

form.onsubmit = (event) => {
    event.preventDefault();

    if (nombre.value === "" || mail.value === ""  || mensaje === "" || edad === "") {
        alert("Debe completar todos los campos")
    }else if (mail.value.includes("@")) {
        alert("Su mensaje a sido enviado de manera correcta")
    } else {
         alert("coloca tu mail de forma correcta")
     }
}










