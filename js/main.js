let carrito = [];

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



//Agregamos swiper:


var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



//FILTRAMOS OFERTAS
const filtrar = terapias.filter((tera) => {
    return tera.oferta === true
})

//VERIFICACION DE OFERTA
function verificaroferta() {
    for (let i = 0; i < terapias.length; i++) {
        if (terapias[i].oferta === true) {
            //alert(`la terapia : ${ terapias[i].producto} tiene un 10% de descuento hasta 2024. El valor de la sesion es: ${terapias[i].precio * 0.90}`)
        }
    }
}
verificaroferta()



//MOSTRAMOS OFERTAS
const mostrarOfertas = () => {
    filtrar.forEach((terapias) => {
        const tarjeta = document.createElement("div");
        tarjeta.innerHTML = `
        <h1>OFERTAS</h1>
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
        contenedorOfertas.appendChild(tarjeta);
         // agregar productos al carrito
    const boton = document.getElementById(`boton${terapias.id}`);
    boton.addEventListener("click", () => {
        console.log("click")
        introducirAlCarro(terapias.id)

    })
    });

   
}
mostrarOfertas()




//AGREGAR TERAPIAS AL CARRITO
const introducirAlCarro = (id) =>{
    const terapia = terapias.find((terapias) => terapias.id === id);
    const productoEnCarrito= carrito.find((terapias) => terapias.id === id);
if (productoEnCarrito){
    productoEnCarrito.cantidad++;
}else {
    carrito.push(terapia);
    //agregamos al localstorage
    localStorage.setItem("carrito",JSON.stringify(carrito));
    }
    
}