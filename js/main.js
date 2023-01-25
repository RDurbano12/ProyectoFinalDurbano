
let carrito = [];


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
const introducirAlCarro = (producto) =>{ 
    const terapia = terapias.find((terapia) => terapias.producto === producto);
    const productoEnCarrito= carrito.find((terapia) => terapias.producto === producto);
if (productoEnCarrito){
    productoEnCarrito.cantidad++;
}else {
    carrito.push(terapia);
    }
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
    carrito.forEach((producto) => {
        const card = document.createElement("div");
        card.innerHTML = `
        <div class= "tarjeta">
        <img src="${terapias.img}"> class="tarjetaImg" alt="${terapias.producto}">
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

}






//funcion q elimina tearpia del carrito:

const EliminarDelCarrito = (terapias) =>{
    const eliminar = terapias.find((terapias) => terapias.id === id);
    const indice = carrito.indexOf(terapias.id);
    carrito.splice(indice, 1);
    mostrarCarrito()
}