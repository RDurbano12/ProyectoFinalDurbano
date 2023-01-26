
/*let carrito = [];
//cargar carrito desde LS
if(localStorage.getItem("carrito")){
    carrito =JSON.parse(localStorage.getItem("carrito"));
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
    const boton = document.getElementById (`boton${terapias.id}`);
    boton.addEventListener("click", () => {
        console.log("click")
       introducirAlCarro(terapias.id)
        
    })
     
    })
  

}
mostrarTerapias();
//funcion para agregar terapias al carrito:
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
    calcularTerapias();
}

//mostrar carrito
const contenedorCarrito= document.getElementById("contenedorCarrito")
const verCarrito= document.getElementById("verCarrito");

verCarrito.addEventListener("click", () =>{
    mostrarCarrito();

});

//funcion para mostrar el carrito:
const mostrarCarrito = () =>{
    contenedorCarrito.innerHTML="";
    carrito.forEach((terapias) => {
        const card = document.createElement("div");
        card.innerHTML = `
        <div class= "tarjeta">
        <img src="${terapias.img}" class="tarjetaImg" alt="${terapias.producto}">
        <h2>
         ${terapias.producto}
        </h2>    
        <h3>
        ${terapias.descripcion}
        </h3>
        <h3>
        Precio: ${terapias.precio}
        </h3>   
        <h3>
        cantidad: ${terapias.cantidad} 
        </h3>
        <button class="btn" id="eliminar${terapias.id}">Eliminar terapia </button>     
        </div>
    
    `
    contenedorCarrito.appendChild(card);

//eliminar producto del carrito

    const boton = document.getElementById(`eliminar${terapias.id}`)
     boton.addEventListener("click", () =>{
        EliminarDelCarrito(terapias.id)
    })
   
    })
    calcularTerapias()
}

//funcion q elimina tearpia del carrito:

const EliminarDelCarrito = (id) =>{
    const eliminar = terapias.find((terapias) => terapias.id === id);
    const indice = carrito.indexOf(terapias.id);
    carrito.splice(indice, 1);
    mostrarCarrito();
    //localstorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


// eliminar todo el carrito:

const vaciarCarrito = document.getElementById("vaciarCarrito");
vaciarCarrito.addEventListener("click",()=>{
    eliminarTodoElCarrito();
})
//funcion eliminar todo el carrito:
const eliminarTodoElCarrito = () =>{
    carrito = [];
    mostrarCarrito();
    //localstorage
    localStorage.clear();
}

//total de la compra:
const total = document.getElementById("total");

const calcularTerapias = () =>{
    let totalCompra = 0;
    carrito.forEach((terapias) => {
        totalCompra += terapias.precio * terapias.cantidad;
    })
    total.innerHTML = ` ${totalCompra}`;
}*/

//modo oscuro:
const bdark= document.querySelector('#bdark');
const body =document.querySelector('body');

load()

bdark.addEventListener('click', e =>{
    body.classList.toggle('darkmode');
    store(body.classList.contains('darkmode'));
});

function load(){
    const darkmode =localStorage.getItem('darkmode');
    if(!darkmode){
        store('false');
    }else if(darkmode =='true'){
        body.classList.add('darkmode');
    }
}
function store (value){
    localStorage.setItem('darkmode',value);
}