let carrito = [];
//cargar carrito desde LS
if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}
const contenedorTerapias = document.getElementById("contenedorTerapias");

// mostrar terapias:

const mostrarTerapias = () => {
    terapias.forEach((terapias) => {
        const card = document.createElement("div");
        card.innerHTML = `
        <div class= "tarjeta">
        <img src="${terapias.img}" class= "tarjetaImg" alt=" ${terapias.producto}">
        <h2>
         ${terapias.producto}
        </h2>    
        <h3>
        ${terapias.descripcion}
        </h3>
        <h3>
        Precio: ${terapias.precio}
        </h3>    
        <button class="btn" id="boton${terapias.id}">Agregar al carrito</button>     
        </div>
    
    `
        contenedorTerapias.appendChild(card);

        //agregar productos al carrito
        const boton = document.getElementById(`boton${terapias.id}`);
        boton.addEventListener("click", () => {
            confirm("Quieres agregar esta terapia al carrito")
            introducirAlCarro(terapias.id)

        })

    })


}
mostrarTerapias();
//funcion para agregar terapias al carrito:
const introducirAlCarro = (id) => {
    const terapia = terapias.find((terapias) => terapias.id === id);
    const productoEnCarrito = carrito.find((terapias) => terapias.id === id);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push(terapia);
        //agregamos al localstorage
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
}



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



//ordenar terapias de a-z y z-a:
terapias.sort(function (a, b) {
    let productoA = a.producto.toUpperCase();
    let productoB = b.producto.toUpperCase();
    if (productoA < productoB) {
        return -1;
    }
    if (productoA > productoB) {
        return 1;
    }
    return 0;
});

function displayTerapias() {
    let container = document.getElementById("contenedorTerapias");
    container.innerHTML = "";
    for (let i = 0; i < terapias.length; i++) {
        let producto = terapias[i].producto;
        let precio = terapias[i].precio;
        let descripcion = terapias[i].descripcion;
        let img = terapias[i].img
        let id = terapias[i].id
        container.innerHTML += `
        <div class= "tarjeta">
        <img src="${img}" class= "tarjetaImg" alt=" ${producto}">
        <h2>
         ${producto}
        </h2>    
        <h3>
        ${descripcion}
        </h3>
        <h3>
        Precio: ${precio}
        </h3>    
        <button class="btn" id="boton${id}">Agregar al carrito</button>     
        </div>
    
    `
    
    }
}


let boton = document.getElementById("ordenarAlfabeticamente");
boton.addEventListener("click", ordenar);
function ordenar(){
    terapias.sort((a, b) => (a.producto > b.producto) ? 1 : -1);
   
    displayTerapias();
};









